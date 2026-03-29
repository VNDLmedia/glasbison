import Image from "next/image";

interface BisonIconProps {
  size?: number;
  variant?: "blue" | "white";
  className?: string;
}

export function BisonLogo({ size = 48, variant = "white", className = "" }: BisonIconProps) {
  const src = variant === "white" ? "/bison-icon-white.svg" : "/bison-icon.svg";
  return (
    <Image
      src={src}
      alt="Glass Bison"
      width={size}
      height={Math.round(size * 0.72)}
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
  const src = variant === "white" ? "/bison-logo-wordmark-white.svg" : "/bison-logo-wordmark.svg";
  return (
    <Image
      src={src}
      alt="Glass Bison"
      width={Math.round(height * 3.5)}
      height={height}
      className={className}
      priority
    />
  );
}
