import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';

export function useProductCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const setSelectedSlideIndex = (emblaApi: EmblaCarouselType) => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on('select', setSelectedSlideIndex);
    return () => {
      emblaApi.off('select', setSelectedSlideIndex);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollTo(selectedIndex);
  }, [emblaApi, selectedIndex]);

  return { containerRef: emblaRef, selectedItem: selectedIndex, selectItem: setSelectedIndex };
}
