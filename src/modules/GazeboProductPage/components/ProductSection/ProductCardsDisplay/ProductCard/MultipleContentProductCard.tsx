import type { MultipleContentProductItem } from '../types';
import { useEffect, useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ProductNavButton';

type Props = Pick<MultipleContentProductItem, 'subitems'>;

export const MultipleContentProductCard = ({ subitems }: Props) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);
  useEffect(() => setCurrItemIndex(0), [subitems]);

  const { title, text, image } = subitems[currItemIndex];

  return (
    <div className="relative h-full flex-[3] bg-white p-8 md:p-10 lg:px-28 lg:py-16">
      <div className="flex h-full items-center">
        <div className="absolute top-0 left-0 hidden h-full w-28 shrink-0 items-center lg:flex">
          <ProductNavButton
            onClick={() => setCurrItemIndex(currItemIndex - 1)}
            type="left"
            isDisabled={currItemIndex === 0}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8 self-start">
          <ProductCardImage src={image.meta.src} alt={image.alt} />
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-[400px] justify-between lg:justify-center">
              <div className="h-6 w-6 lg:hidden">
                <ProductNavButton
                  onClick={() => setCurrItemIndex(currItemIndex - 1)}
                  type="left"
                  isDisabled={currItemIndex === 0}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <div className="h-6 w-6 lg:hidden">
                <ProductNavButton
                  type="right"
                  onClick={() => setCurrItemIndex(currItemIndex + 1)}
                  isDisabled={currItemIndex === subitems.length - 1}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-lg font-light text-pretty text-gray-800 md:text-xl">
              {text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden h-full w-28 shrink-0 items-center lg:flex">
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
