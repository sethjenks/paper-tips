import Image from "next/image";

import { stackImageSizes, type StackImage } from "../lib/stacks";

interface StackMediaProps {
  image: StackImage;
  preload?: boolean;
  sizes?: string;
  variant?: "hero" | "card";
}

export function StackMedia({
  image,
  preload = false,
  sizes = stackImageSizes,
  variant = "hero",
}: StackMediaProps) {
  const figureClass = [
    variant === "card" ? "stack-card-media" : "stack-hero",
    image.height > image.width
      ? variant === "card"
        ? "stack-card-media-portrait"
        : "stack-hero-portrait"
      : "",
  ]
    .filter(Boolean)
    .join(" ");
  const frameClass = variant === "card" ? "stack-card-media-frame" : "stack-hero-frame";

  return (
    <figure className={figureClass}>
      <div className={frameClass}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          quality={90}
          preload={preload}
        />
      </div>
      {variant === "hero" && image.credit ? (
        <figcaption>
          From{" "}
          {image.creditHref ? (
            <a href={image.creditHref} rel="noopener noreferrer">
              {image.credit}
            </a>
          ) : (
            image.credit
          )}
        </figcaption>
      ) : null}
    </figure>
  );
}
