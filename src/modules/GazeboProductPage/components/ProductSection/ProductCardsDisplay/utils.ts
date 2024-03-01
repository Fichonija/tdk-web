import {
  ProductItemType,
  type BaseProductItem,
  type ProductItemContent,
  type MultipleImagesProductItem,
  type MultipleContentProductItem,
} from './types';

export const isBaseProductItem = (item: ProductItemContent): item is BaseProductItem =>
  item.type === ProductItemType.BASE;

export const isMultipleImagesProductItem = (item: ProductItemContent): item is MultipleImagesProductItem =>
  item.type === ProductItemType.MULTIPLE_IMAGES;

export const isMultipleContentProductItem = (item: ProductItemContent): item is MultipleContentProductItem =>
  item.type === ProductItemType.MULTIPLE_CONTENT;
