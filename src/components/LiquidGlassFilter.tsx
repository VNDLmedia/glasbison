"use client";

import React, { useEffect, useRef, useCallback } from "react";

/**
 * LiquidGlassFilter
 *
 * Generates a mathematically-accurate displacement map using Signed Distance
 * Fields (SDF), inspired by Shu Ding's liquid-glass implementation.
 *
 * The displacement map creates a lens-like refraction effect:
 * - Center of the glass is optically clear (no displacement)
 * - Edges displace content TOWARD the center, creating magnification/curvature
 * - The falloff follows a smooth-step curve for natural lens optics
 *
 * The map is rendered to a hidden canvas, exported as a data URL, and fed to
 * an SVG <feImage> + <feDisplacementMap> filter applied via backdrop-filter.
 */

// --- Math utilities (from Shu Ding's liquid-glass.js) ---

function smoothStep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function length(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

/**
 * Signed Distance Field for a rounded rectangle.
 * Returns negative values inside the shape, positive outside.
 * This is the core of the lens-like displacement effect.
 */
function roundedRectSDF(
  px: number,
  py: number,
  halfWidth: number,
  halfHeight: number,
  radius: number
): number {
  const qx = Math.abs(px) - halfWidth + radius;
  const qy = Math.abs(py) - halfHeight + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    length(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
}

// --- Displacement map generation ---

interface DisplacementResult {
  dataUrl: string;
  scale: number;
}

function generateDisplacementMap(
  width: number,
  height: number,
  canvas: HTMLCanvasElement,
  options: {
    borderRadius?: number;
    refractionStrength?: number;
    edgeSoftness?: number;
  } = {}
): DisplacementResult {
  const {
    borderRadius = 20,
    refractionStrength = 1.0,
    edgeSoftness = 0.15,
  } = options;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { dataUrl: "", scale: 0 };

  const data = new Uint8ClampedArray(width * height * 4);
  const rawDx: number[] = [];
  const rawDy: number[] = [];
  let maxScale = 0;

  // Compute the SDF-based displacement for each pixel
  // The key insight: we compute where each pixel SHOULD sample from
  // to create a lens refraction effect.

  // Normalized radius relative to the element size
  const normRadius = (borderRadius / Math.min(width, height)) * 2;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Normalize to [-0.5, 0.5] range, centered on the element
      const nx = x / width - 0.5;
      const ny = y / height - 0.5;

      // Compute SDF distance to the rounded rectangle edge
      // halfWidth/halfHeight are in normalized space
      const halfW = 0.5 - normRadius * 0.5;
      const halfH = 0.5 - normRadius * 0.5;

      const dist = roundedRectSDF(nx, ny, halfW, halfH, normRadius);

      // Create lens-like displacement:
      // - smoothStep creates a smooth falloff from edge to center
      // - "displacement" is strongest near the edges, zero at center
      // - The direction points FROM the pixel TOWARD the center
      const displacement =
        smoothStep(0.8, 0, dist - edgeSoftness) * refractionStrength;

      // Apply a secondary smooth-step to create a more natural lens curve
      // This mimics the convex surface profile described in kube.io:
      // y = sqrt(1 - (1-x)^2) for convex circle
      const scaled = smoothStep(0, 1, displacement);

      // The displaced UV: content at this pixel should be sampled
      // from a position displaced toward the center
      const displacedX = nx * scaled + 0.5;
      const displacedY = ny * scaled + 0.5;

      // Compute the actual pixel displacement
      const dx = displacedX * width - x;
      const dy = displacedY * height - y;

      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawDx.push(dx);
      rawDy.push(dy);
    }
  }

  // Clamp to at least 1 to avoid division by zero
  maxScale = Math.max(maxScale, 1);

  // Encode displacements into R (horizontal) and G (vertical) channels
  // Neutral gray (128) = no displacement
  // The scale parameter of feDisplacementMap compensates for normalization
  for (let i = 0; i < rawDx.length; i++) {
    const r = rawDx[i] / (maxScale * 2) + 0.5;
    const g = rawDy[i] / (maxScale * 2) + 0.5;
    const pi = i * 4;
    data[pi] = Math.round(r * 255); // R channel = X displacement
    data[pi + 1] = Math.round(g * 255); // G channel = Y displacement
    data[pi + 2] = 0; // B channel unused
    data[pi + 3] = 255; // Full opacity
  }

  ctx.putImageData(new ImageData(data, width, height), 0, 0);

  return {
    dataUrl: canvas.toDataURL(),
    scale: (maxScale * 2),
  };
}

// --- Component ---

interface LiquidGlassFilterProps {
  /** Unique filter ID. Must match what CSS references. */
  id?: string;
  /** Width of the displacement map in pixels */
  width?: number;
  /** Height of the displacement map in pixels */
  height?: number;
  /** Border radius for the SDF shape (px) */
  borderRadius?: number;
  /** How strong the edge refraction is (0-2, default 1) */
  refractionStrength?: number;
  /** How far the refraction extends from edges (0-0.5, default 0.15) */
  edgeSoftness?: number;
}

export function LiquidGlassFilter({
  id = "liquid-glass-filter",
  width = 400,
  height = 300,
  borderRadius = 20,
  refractionStrength = 1.0,
  edgeSoftness = 0.15,
}: LiquidGlassFilterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const feDispRef = useRef<SVGFEDisplacementMapElement>(null);

  const generate = useCallback(() => {
    if (!canvasRef.current || !feImageRef.current || !feDispRef.current) return;

    const result = generateDisplacementMap(width, height, canvasRef.current, {
      borderRadius,
      refractionStrength,
      edgeSoftness,
    });

    if (result.dataUrl) {
      feImageRef.current.setAttribute("href", result.dataUrl);
      feDispRef.current.setAttribute("scale", String(result.scale));
    }
  }, [width, height, borderRadius, refractionStrength, edgeSoftness]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <>
      {/* Hidden canvas for computing the displacement map */}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        aria-hidden="true"
      />
      {/* SVG filter definition */}
      <svg
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id={id}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            {/*
              1. Load the computed displacement map.
              R channel = horizontal displacement
              G channel = vertical displacement
              Neutral gray (128,128) = no displacement
            */}
            <feImage
              ref={feImageRef}
              result="displacementMap"
              width={width}
              height={height}
            />
            {/*
              2. Apply displacement to the backdrop content.
              Scale is computed dynamically based on the max displacement magnitude.
              xChannelSelector="R" yChannelSelector="G" matches our encoding.
            */}
            <feDisplacementMap
              ref={feDispRef}
              in="SourceGraphic"
              in2="displacementMap"
              xChannelSelector="R"
              yChannelSelector="G"
              scale="0"
              result="refracted"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default LiquidGlassFilter;
