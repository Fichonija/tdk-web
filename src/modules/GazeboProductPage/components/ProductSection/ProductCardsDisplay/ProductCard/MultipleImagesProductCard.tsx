import type { MultipleImagesProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductNavButton } from './ImageNavButton';

type Props = Omit<MultipleImagesProductItem, 'containerHeight' | 'type'>;

export const MultipleImagesProductCard = ({ title, text, images }: Props) => {
  const [currImageIndex, setCurrImgIndex] = useState(0);
  const selectedImage = images[currImageIndex];

  return (
    <div className="py-16 px-8 flex-[3] bg-white">
      <div className="flex gap-10 items-center">
        <ProductNavButton
          onClick={() => setCurrImgIndex(currImageIndex - 1)}
          type="left"
          isDisabled={currImageIndex === 0}
        />
        <div className="flex flex-col items-center gap-8">
          <ProductCardImage src={selectedImage.meta.src} alt={selectedImage.alt} />
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
          onClick={() => setCurrImgIndex(currImageIndex + 1)}
          isDisabled={currImageIndex === images.length - 1}
        />
      </div>
    </div>
  );
};
