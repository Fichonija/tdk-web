import type { MultipleImagesProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ProductNavButton';
import clsx from 'clsx';

type Props = Omit<MultipleImagesProductItem, 'containerHeight' | 'type'>;

export const MultipleImagesProductCard = ({ title, text, images }: Props) => {
  const [currImageIndex, setCurrImgIndex] = useState(0);
  const selectedImage = images[currImageIndex];

  const isLeftNavDisabled = currImageIndex === 0;
  const isRightNavDisabled = currImageIndex === images.length - 1;

  return (
    <div className="relative p-8 md:p-10 lg:py-16 lg:px-28 flex-[3] bg-white">
      <div className="h-full flex">
        <div className="hidden absolute top-0 left-0 lg:flex w-28 h-full items-center shrink-0">
          <ProductNavButton
            onClick={() => setCurrImgIndex(currImageIndex - 1)}
            type="left"
            isDisabled={isLeftNavDisabled}
          />
        </div>
        <div className="w-full flex flex-col items-center gap-8">
          <ProductCardImage src={selectedImage.meta.src} alt={selectedImage.alt} />
          <div className="flex flex-col items-center gap-4">
            <div className="max-w-[400px] w-full flex justify-between lg:justify-center">
              <div className="lg:hidden w-6 h-6">
                <ProductNavButton
                  onClick={() => setCurrImgIndex(currImageIndex - 1)}
                  type="left"
                  isDisabled={isLeftNavDisabled}
                />
              </div>
              <h3 className="font-bold text-xl text-gray-800">{title}</h3>
              <div className="lg:hidden w-6 h-6">
                <ProductNavButton
                  type="right"
                  onClick={() => setCurrImgIndex(currImageIndex + 1)}
                  isDisabled={isRightNavDisabled}
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
            onClick={() => setCurrImgIndex(currImageIndex + 1)}
            isDisabled={isRightNavDisabled}
          />
        </div>
      </div>
    </div>
  );
};
