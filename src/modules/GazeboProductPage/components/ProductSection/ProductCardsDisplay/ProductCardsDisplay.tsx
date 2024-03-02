import clsx from 'clsx';
import { useState } from 'react';
import { MultipleContentProductCard, MultipleImagesProductCard, ProductCard } from './ProductCard';
import type { ProductItemContent } from './types';
import { isBaseProductItem, isMultipleImagesProductItem } from './utils';

interface Props {
  summary: string[];
  items: ProductItemContent[];
}

export const ProductCardsDisplay = ({ summary, items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="w-full flex flex-col gap-8 font-sansation">
      <nav>
        <ul className="w-fit flex font-light text-2xl text-gray-900">
          {items.map((item, i) => (
            <ol
              tabIndex={0}
              key={i}
              className={clsx(
                'p-4 cursor-pointer border-b-2',
                selectedItem === item ? 'border-b-black' : 'border-b-black/20',
              )}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
            >
              {item.title}
            </ol>
          ))}
        </ul>
      </nav>
      <article className={clsx('flex transition-all duration-300', selectedItem.containerHeight)}>
        <div className={clsx('py-16 px-8 w-[30%] font-light text-xl text-gray-50 bg-[var(--product-section-color)]')}>
          {summary.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        {isBaseProductItem(selectedItem) ? (
          <ProductCard {...selectedItem} />
        ) : isMultipleImagesProductItem(selectedItem) ? (
          <MultipleImagesProductCard {...selectedItem} />
        ) : (
          <MultipleContentProductCard {...selectedItem} />
        )}
      </article>
    </div>
  );
};
