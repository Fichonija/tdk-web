import type { MultipleContentProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ProductNavButton';

type Props = Pick<MultipleContentProductItem, 'subitems'>;

export const MultipleContentProductCard = ({ subitems }: Props) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const { title, text, image } = subitems[currItemIndex];

  return (
    <div className="py-16 px-8 flex-[3] bg-white">
      <div className="h-full flex items-center">
        <ProductNavButton
          onClick={() => setCurrItemIndex(currItemIndex - 1)}
          type="left"
          isDisabled={currItemIndex === 0}
        />
        <div className="w-full self-start flex flex-col items-center gap-8">
          <ProductCardImage src={image.meta.src} alt={image.alt} />
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl text-gray-800">{title}</h3>
            <div className="flex flex-col gap-2 font-light text-xl text-gray-800">
              {text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </div>
        <ProductNavButton
          type="right"
          onClick={() => setCurrItemIndex(currItemIndex + 1)}
          isDisabled={currItemIndex === subitems.length - 1}
        />
      </div>
    </div>
  );
};
