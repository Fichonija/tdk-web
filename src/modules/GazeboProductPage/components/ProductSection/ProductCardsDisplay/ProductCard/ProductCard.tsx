import type { BaseProductItem } from '../types';
import { ProductCardImage } from './ProductCardImage';

type Props = Omit<BaseProductItem, 'containerHeight' | 'type'>;

export const ProductCard = ({ title, text, image }: Props) => (
  <div className="flex h-full flex-[3] flex-col items-center gap-6 bg-white p-8 md:gap-8 md:p-10 lg:px-28 lg:py-16">
    <ProductCardImage src={image.meta.src} alt={image.alt} />
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg font-bold text-gray-800 md:text-xl">{title}</h3>
      <div className="flex flex-col gap-2 text-lg font-light text-pretty text-gray-800 md:text-xl">
        {text.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  </div>
);
