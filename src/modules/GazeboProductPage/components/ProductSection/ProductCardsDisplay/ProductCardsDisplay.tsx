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
    <div className="w-full flex flex-col gap-4 lg:gap-8 font-sansation">
      <nav>
        <ul className="flex flex-wrap font-light text-xl lg:text-2xl text-gray-900">
          {items.map((item, i) => (
            <li
              tabIndex={0}
              key={i}
              className={clsx(
                'p-2 lg:p-4 flex-1 lg:flex-initial cursor-pointer border-b-2 text-center whitespace-nowrap',
                selectedItem === item ? 'border-b-black' : 'border-b-black/20',
              )}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <article className="flex transition-all duration-300">
        <div className="hidden py-16 px-8 w-1/3 lg:flex lg:flex-col gap-1 font-light text-xl text-gray-50 bg-[var(--product-section-color)]">
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
