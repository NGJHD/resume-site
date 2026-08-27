import type { CSSProperties } from "react";

export type SizedImage = { src: string; width: number; height: number };

const isPortrait = (img: SizedImage) => img.height > img.width;

/**
 * Every image in a carousel group renders at the same width, so each one paints
 * at `width / aspect` tall — meaning the landscape image with the SMALLEST
 * aspect ratio is the tallest one in the group. That is the ceiling portrait
 * images get capped to.
 *
 * Returned as an aspect ratio rather than a pixel height because the render
 * width is responsive; the cap has to be recomputed by the browser at every
 * viewport size, which `aspect-ratio` does for free.
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
 * image would occupy, so they can never make a card taller than a landscape
 * one already does. `object-fit: contain` (set in each section's CSS) keeps
 * them undistorted and centred inside it.
 *
 * Everything else — landscape images, and portrait ones in a group that has no
 * landscape image to measure against — keeps the natural-size multiplier caps.
 */
export function imageFitStyle(
  img: SizedImage,
  referenceAspect: number | null,
  scale: { x: number; y: number },
): CSSProperties {
  if (isPortrait(img) && referenceAspect !== null) {
    return { aspectRatio: String(referenceAspect), height: "auto" };
  }
  return {
    maxHeight: Math.round(img.height * scale.y),
    maxWidth: Math.round(img.width * scale.x),
  };
}
