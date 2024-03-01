import clsx from 'clsx';
import { useState } from 'react';
import { MultipleContentProductCard, MultipleImagesProductCard, ProductCard } from './ProductCard';
import type { ProductItemContent, Summary } from './types';
import { isBaseProductItem, isMultipleImagesProductItem } from './utils';

interface Props {
  summary: Summary;
  items: ProductItemContent[];
}

const ProductCardsDisplay = ({ summary, items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="flex flex-col gap-8 font-sansation">
      <ul className="w-fit flex font-light text-2xl text-gray-900">
        {items.map((i) => (
          <ol
            tabIndex={0}
            key={i.title}
            className={clsx(
              'p-4 cursor-pointer border-b-2',
              selectedItem === i ? 'border-b-black' : 'border-b-black/20',
            )}
            onClick={() => setSelectedItem(i)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(i)}
          >
            {i.title}
          </ol>
        ))}
      </ul>
      <div className={clsx('flex transition-all duration-500', selectedItem.containerHeight)}>
        <div className={clsx('py-16 px-8 flex-1 font-light text-xl text-gray-50', summary.color)}>
          <p>{summary.text}</p>
        </div>
        {isBaseProductItem(selectedItem) ? (
          <ProductCard {...selectedItem} />
        ) : isMultipleImagesProductItem(selectedItem) ? (
          <MultipleImagesProductCard {...selectedItem} />
        ) : (
          <MultipleContentProductCard {...selectedItem} />
        )}
      </div>
    </div>
  );
};

export default ProductCardsDisplay;