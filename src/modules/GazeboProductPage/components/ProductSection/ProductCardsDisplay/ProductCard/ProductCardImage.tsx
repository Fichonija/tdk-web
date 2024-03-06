interface Props {
  src: string;
  alt: string;
}

export const ProductCardImage = ({ src, alt }: Props) => (
  <img
    src={src}
    width={400}
    height={250}
    className="object-cover bg-white shadow-lg shadow-black/10"
    alt={alt}
    loading="lazy"
  />
);
