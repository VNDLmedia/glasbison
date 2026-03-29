import Image from "next/image";

interface BisonIconProps {
  size?: number;
  variant?: "blue" | "white";
  className?: string;
}

export function BisonLogo({ size = 48, variant = "white", className = "" }: BisonIconProps) {
  const src = variant === "white" ? "/brand/logo-white.svg" : "/brand/logo-blue.svg";
  // Aspect ratio from SVG: ~1.56:1 (width:height), so height = size / 1.56
  return (
    <Image
      src={src}
      alt="Glass Bison"
      width={size}
      height={Math.round(size / 1.56)}
      className={className}
      priority
    />
  );
}

interface BisonWordmarkProps {
  height?: number;
  variant?: "blue" | "white";
  className?: string;
}

export function BisonWordmark({ height = 28, variant = "white", className = "" }: BisonWordmarkProps) {
  const src = variant === "white" ? "/brand/schriftzug-white.svg" : "/brand/schriftzug-blue.svg";
  // Aspect ratio ~8.5:1
  return (
    <Image
      src={src}
      alt="Glass Bison"
      width={Math.round(height * 8.5)}
      height={height}
      className={className}
      priority
    />
  );
}

interface BisonSchriftzugProps {
  height?: number;
  variant?: "blue" | "white";
  className?: string;
}

export function BisonSchriftzug({ height = 80, variant = "white", className = "" }: BisonSchriftzugProps) {
  const src = variant === "white" ? "/brand/schriftzug-white.svg" : "/brand/schriftzug-blue.svg";
  // Aspect ratio ~8.5:1
  return (
    <Image
      src={src}
      alt="Glass Bison"
      width={Math.round(height * 8.5)}
      height={height}
      className={className}
    />
  );
}

interface BisonLogoSchriftzugProps {
  height?: number;
  className?: string;
}

export function BisonLogoSchriftzug({ height = 80, className = "" }: BisonLogoSchriftzugProps) {
  // Logo + Schriftzug combined, aspect ratio ~1.5:1
  return (
    <Image
      src="/brand/logo-schriftzug.svg"
      alt="Glass Bison"
      width={Math.round(height * 1.5)}
      height={height}
      className={className}
    />
  );
}

interface BisonWordmarkFullProps {
  height?: number;
  className?: string;
}

export function BisonWordmarkFull({ height = 120, className = "" }: BisonWordmarkFullProps) {
  // Full wordmark (bison + text), aspect ratio ~1.76:1
  return (
    <Image
      src="/brand/wordmark-white.svg"
      alt="Glass Bison"
      width={Math.round(height * 1.76)}
      height={height}
      className={className}
    />
  );
}
