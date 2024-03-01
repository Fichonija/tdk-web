export type ProductItemContent = BaseProductItem | MultipleImagesProductItem | MultipleContentProductItem;

export enum ProductItemType {
  BASE,
  MULTIPLE_IMAGES,
  MULTIPLE_CONTENT,
}

export interface BaseProductItem {
  title: string;
  text: string[];
  image: ProductItemImage;
  containerHeight: string;
  type: ProductItemType.BASE;
}

export interface MultipleImagesProductItem {
  title: string;
  text: string[];
  images: ProductItemImage[];
  containerHeight: string;
  type: ProductItemType.MULTIPLE_IMAGES;
}

export interface MultipleContentProductItem {
  title: string;
  subitems: { title: string; text: string[]; image: ProductItemImage }[];
  containerHeight: string;
  type: ProductItemType.MULTIPLE_CONTENT;
}

interface ProductItemImage {
  meta: ImageMetadata;
  alt: string;
}

export interface Summary {
  text: string;
  color: string;
}
