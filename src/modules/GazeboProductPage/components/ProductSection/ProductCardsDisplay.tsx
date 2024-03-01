import type { ImageMetadata } from 'astro';
import clsx from 'clsx';
import { useState } from 'react';

interface ProductItem {
  title: string;
  text: string[];
  image: { meta: ImageMetadata; alt: string };
  containerHeight: string;
}

interface Summary {
  text: string;
  color: string;
}

interface Props {
  summary: Summary;
  items: ProductItem[];
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
        <div className=" py-16 px-8 flex-[3] flex flex-col items-center gap-8 bg-white">
          <img
            src={selectedItem.image.meta.src}
            width={400}
            height={200}
            className="object-cover shadow-lg shadow-black/10"
            alt={selectedItem.image.alt}
          />
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl text-gray-800">{selectedItem.title}</h3>
            <div className="flex flex-col gap-2 font-light text-xl text-gray-800">
              {selectedItem.text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardsDisplay;
