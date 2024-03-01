export interface ProductItem {
  title: string;
  text: string[];
  image: { meta: ImageMetadata; alt: string };
  containerHeight: string;
}

export interface Summary {
  text: string;
  color: string;
}
