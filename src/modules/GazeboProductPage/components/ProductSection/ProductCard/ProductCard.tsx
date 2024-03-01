import type { ImageMetadata } from 'astro';

interface Props {
  title: string;
  text: string[];
  image: { meta: ImageMetadata; alt: string };
}

export const ProductCard = ({ title, text, image }: Props) => (
  <div className=" py-16 px-8 flex-[3] flex flex-col items-center gap-8 bg-white">
    <img
      src={image.meta.src}
      width={400}
      height={200}
      className="object-cover shadow-lg shadow-black/10"
      alt={image.alt}
    />
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
