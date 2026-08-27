import type { CSSProperties } from "react";

export type SizedImage = { src: string; width: number; height: number };

export type ImageFit = { className?: string; style: CSSProperties };

const isPortrait = (img: SizedImage) => img.height > img.width;

/**
 * Every image in a carousel group renders at the same width, so each one paints
 * at `width / aspect` tall — meaning the landscape image with the SMALLEST
 * aspect ratio is the tallest one in the group. That is the ceiling portrait
 * images get capped to.
 *
 * Returns null for a group with no landscape image, in which case portrait
 * images keep their own natural height.
 */
export function landscapeReferenceAspect(images: SizedImage[]): number | null {
  const aspects = images.filter((img) => !isPortrait(img)).map((img) => img.width / img.height);
  return aspects.length ? Math.min(...aspects) : null;
}

/**
 * Portrait images are letterboxed into the box the group's tallest landscape
 * image occupies, so they can never make a card taller than a landscape one
 * already does.
 *
 * The cap is handed to CSS as `--landscape-aspect` rather than applied as an
 * inline pixel height because the render width is responsive: the browser has
 * to recompute the cap at every viewport size, which `aspect-ratio` does for
 * free. See `img.portrait-capped` in index.css.
 *
 * The cap applies at every width, phones included. Capping to the landscape
 * height necessarily makes a tall image narrow — a 300x700 image capped to a
 * 1.43:1 group is ~30% of the container width — which is the intended
 * trade-off, not a bug to work around at small sizes.
 *
 * Everything else — landscape images, and portrait ones in a group with no
 * landscape image to measure against — keeps the natural-size multiplier caps.
 */
export function imageFit(
  img: SizedImage,
  referenceAspect: number | null,
  scale: { x: number; y: number },
): ImageFit {
  if (isPortrait(img) && referenceAspect !== null) {
    return {
      className: "portrait-capped",
      style: { "--landscape-aspect": String(referenceAspect) } as CSSProperties,
    };
  }
  return {
    style: {
      maxHeight: Math.round(img.height * scale.y),
      maxWidth: Math.round(img.width * scale.x),
    },
  };
}
