import type { MultipleImagesProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ProductNavButton';

type Props = Omit<MultipleImagesProductItem, 'containerHeight' | 'type'>;

export const MultipleImagesProductCard = ({ title, text, images }: Props) => {
  const [currImageIndex, setCurrImgIndex] = useState(0);
  const selectedImage = images[currImageIndex];

  const isLeftNavDisabled = currImageIndex === 0;
  const isRightNavDisabled = currImageIndex === images.length - 1;

  return (
    <div className="relative h-full flex-[3] bg-white p-8 md:p-10 lg:px-28 lg:py-16">
      <div className="flex h-full">
        <div className="absolute top-0 left-0 hidden h-full w-28 shrink-0 items-center lg:flex">
          <ProductNavButton
            onClick={() => setCurrImgIndex(currImageIndex - 1)}
            type="left"
            isDisabled={isLeftNavDisabled}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8">
          <ProductCardImage src={selectedImage.meta.src} alt={selectedImage.alt} />
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-[400px] justify-between lg:justify-center">
              <div className="h-6 w-6 lg:hidden">
                <ProductNavButton
                  onClick={() => setCurrImgIndex(currImageIndex - 1)}
                  type="left"
                  isDisabled={isLeftNavDisabled}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <div className="h-6 w-6 lg:hidden">
                <ProductNavButton
                  type="right"
                  onClick={() => setCurrImgIndex(currImageIndex + 1)}
                  isDisabled={isRightNavDisabled}
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
            onClick={() => setCurrImgIndex(currImageIndex + 1)}
            isDisabled={isRightNavDisabled}
          />
        </div>
      </div>
    </div>
  );
};
