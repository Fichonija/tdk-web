import type { BaseProductItem } from '../types';
import { ProductCardImage } from './ProductCardImage';

type Props = Omit<BaseProductItem, 'containerHeight' | 'type'>;

export const ProductCard = ({ title, text, image }: Props) => (
  <div className="p-8 md:p-10 lg:py-16 lg:px-28 flex-[3] flex flex-col items-center gap-6 md:gap-8 bg-white">
    <ProductCardImage src={image.meta.src} alt={image.alt} />
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-bold text-lg md:text-xl text-gray-800">{title}</h3>
      <div className="flex flex-col gap-2 font-light text-lg md:text-xl text-gray-800 text-pretty">
        {text.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  </div>
);
