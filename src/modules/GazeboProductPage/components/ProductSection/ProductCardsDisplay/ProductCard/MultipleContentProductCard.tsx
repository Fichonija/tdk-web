import type { MultipleContentProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ProductNavButton';

type Props = Pick<MultipleContentProductItem, 'subitems'>;

export const MultipleContentProductCard = ({ subitems }: Props) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const { title, text, image } = subitems[currItemIndex];

  return (
    <div className="relative p-8 md:p-10 lg:py-16 lg:px-28 flex-[3] bg-white">
      <div className="h-full flex items-center">
        <div className="hidden absolute top-0 left-0 lg:flex w-28 h-full items-center shrink-0">
          <ProductNavButton
            onClick={() => setCurrItemIndex(currItemIndex - 1)}
            type="left"
            isDisabled={currItemIndex === 0}
          />
        </div>
        <div className="w-full self-start flex flex-col items-center gap-8">
          <ProductCardImage src={image.meta.src} alt={image.alt} />
          <div className="flex flex-col items-center gap-4">
            <div className="max-w-[400px] w-full flex justify-between lg:justify-center">
              <div className="lg:hidden w-6 h-6">
                <ProductNavButton
                  onClick={() => setCurrItemIndex(currItemIndex - 1)}
                  type="left"
                  isDisabled={currItemIndex === 0}
                />
              </div>
              <h3 className="font-bold text-xl text-gray-800">{title}</h3>
              <div className="lg:hidden w-6 h-6">
                <ProductNavButton
                  type="right"
                  onClick={() => setCurrItemIndex(currItemIndex + 1)}
                  isDisabled={currItemIndex === subitems.length - 1}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 font-light text-lg md:text-xl text-gray-800">
              {text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden absolute top-0 right-0 lg:flex w-28 h-full items-center shrink-0">
          <ProductNavButton
            type="right"
            onClick={() => setCurrItemIndex(currItemIndex + 1)}
            isDisabled={currItemIndex === subitems.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
