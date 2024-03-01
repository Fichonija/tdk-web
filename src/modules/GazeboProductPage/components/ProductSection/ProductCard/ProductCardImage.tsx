interface Props {
  src: string;
  alt: string;
}

export const ProductCardImage = ({ src, alt }: Props) => (
  <img src={src} width={400} height={200} className="object-cover shadow-lg shadow-black/10" alt={alt} />
);
