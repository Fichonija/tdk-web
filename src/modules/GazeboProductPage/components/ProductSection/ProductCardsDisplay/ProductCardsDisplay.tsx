import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { MultipleContentProductCard, MultipleImagesProductCard, ProductCard } from './ProductCard';
import type { ProductItemContent } from './types';
import { isBaseProductItem, isMultipleImagesProductItem } from './utils';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { useProductCardsCarousel } from './hooks';

interface Props {
  summary: string[];
  items: ProductItemContent[];
}

export const ProductCardsDisplay = ({ summary, items }: Props) => {
  const { containerRef, selectedItem, selectItem } = useProductCardsCarousel();

  return (
    <div className="font-sansation flex w-full flex-col gap-4 lg:gap-8">
      <nav>
        <ul className="flex flex-wrap text-xl font-light text-gray-900 lg:text-2xl">
          {items.map((item, i) => (
            <li
              tabIndex={0}
              key={i}
              className={clsx(
                'flex-1 cursor-pointer border-b-2 p-2 text-center whitespace-nowrap transition-colors lg:flex-initial lg:p-4',
                selectedItem === i ? 'border-b-black/80' : 'border-b-black/20',
              )}
              onClick={() => selectItem(i)}
              onKeyDown={(e) => e.key === 'Enter' && selectItem(i)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        <div
          className={clsx(
            'hidden bg-[var(--product-section-color)] px-8 py-16 text-xl font-light text-gray-50',
            'min-w-[300px] flex-1 gap-1 lg:flex lg:flex-col',
          )}
        >
          {summary.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="flex-3 overflow-x-hidden" ref={containerRef}>
          <div className="flex h-full">
            {items.map((item, i) => {
              return isBaseProductItem(item) ? (
                <article className="h-full min-w-0 flex-[0_0_100%]" key={i}>
                  <ProductCard {...item} />
                </article>
              ) : isMultipleImagesProductItem(item) ? (
                <article className="h-full min-w-0 flex-[0_0_100%]" key={i}>
                  <MultipleImagesProductCard {...item} />
                </article>
              ) : (
                <article className="h-full min-w-0 flex-[0_0_100%]" key={i}>
                  <MultipleContentProductCard {...item} />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
