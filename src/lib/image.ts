export type ImageLike = string | { src: string };

export const toImageSrc = (image: ImageLike): string =>
  typeof image === "string" ? image : image.src;
