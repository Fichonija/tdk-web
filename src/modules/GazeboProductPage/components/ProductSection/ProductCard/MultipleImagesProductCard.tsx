import type { MultipleImagesProductItem } from '../types';
import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';

type Props = Omit<MultipleImagesProductItem, 'containerHeight' | 'type'>;

export const MultipleImagesProductCard = ({ title, text, images }: Props) => {
  const [currImageIndex, setCurrImgIndex] = useState(0);
  const selectedImage = images[currImageIndex];

  return (
    <div className=" py-16 px-8 flex-[3] flex flex-col items-center gap-8 bg-white">
      <div className="flex gap-10 items-center">
        <ImageNavButton
          onClick={() => setCurrImgIndex(currImageIndex - 1)}
          type="left"
          isDisabled={currImageIndex === 0}
        />
        <ProductCardImage src={selectedImage.meta.src} alt={selectedImage.alt} />
        <ImageNavButton
          type="right"
          onClick={() => setCurrImgIndex(currImageIndex + 1)}
          isDisabled={currImageIndex === images.length - 1}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        <div className="flex flex-col gap-2 font-light text-xl text-gray-800">
          {text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ImageNavButtonProps {
  type: 'left' | 'right';
  onClick: () => void;
  isDisabled: boolean;
}

const ImageNavButton = ({ type, onClick, isDisabled }: ImageNavButtonProps) => (
  <button
    className="w-10 h-10 text-gray-600 hover:text-gray-800 disabled:text-gray-200"
    onClick={onClick}
    disabled={isDisabled}
  >
    {type === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  </button>
);

const ChevronLeftIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.3969 30.8855L7.75572 18.2443C7.48091 17.9695 7.28672 17.6718 7.17313 17.3511C7.05771 17.0305 7 16.687 7 16.3206C7 15.9542 7.05771 15.6107 7.17313 15.2901C7.28672 14.9695 7.48091 14.6718 7.75572 14.3969L20.3969 1.75572C20.9008 1.25191 21.542 1 22.3206 1C23.0992 1 23.7405 1.25191 24.2443 1.75572C24.7481 2.25954 25 2.90076 25 3.67939C25 4.45801 24.7481 5.09924 24.2443 5.60305L13.5267 16.3206L24.2443 27.0382C24.7481 27.542 25 28.1832 25 28.9618C25 29.7405 24.7481 30.3817 24.2443 30.8855C23.7405 31.3893 23.0992 31.6412 22.3206 31.6412C21.542 31.6412 20.9008 31.3893 20.3969 30.8855Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.2824 1.11451L26.9237 13.7557C27.1985 14.0305 27.3927 14.3282 27.5063 14.6489C27.6217 14.9695 27.6794 15.313 27.6794 15.6794C27.6794 16.0458 27.6217 16.3893 27.5063 16.7099C27.3927 17.0305 27.1985 17.3282 26.9237 17.6031L14.2824 30.2443C13.7786 30.7481 13.1374 31 12.3588 31C11.5802 31 10.9389 30.7481 10.4351 30.2443C9.9313 29.7405 9.67939 29.0992 9.67939 28.3206C9.67939 27.542 9.9313 26.9008 10.4351 26.3969L21.1527 15.6794L10.4351 4.96184C9.9313 4.45802 9.67939 3.81679 9.67939 3.03817C9.67939 2.25954 9.9313 1.61832 10.4351 1.11451C10.9389 0.610694 11.5802 0.358778 12.3588 0.358778C13.1374 0.358778 13.7786 0.610694 14.2824 1.11451Z"
      fill="currentColor"
    />
  </svg>
);
