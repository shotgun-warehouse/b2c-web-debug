import React, { useState } from 'react';
import NukaCarousel from 'nuka-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Image from 'components/base/Image';
import { RoundButton } from 'components/base/Button';
import Icon from 'components/base/Icon';

interface ICarouselItem {
  id: string;
  originalUrl: string;
}
interface CarouselProps {
  artworks: ICarouselItem[];
  onSlideChange?: (slideIndex: number) => void;
}
const Carousel = ({ artworks, onSlideChange }: CarouselProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const afterSlide = (slideIndex: number) => {
    setSlideIndex(slideIndex);
    if (onSlideChange) {
      onSlideChange(Math.ceil(slideIndex));
    }
  };
  return (
    <NukaCarousel
      slideIndex={slideIndex}
      afterSlide={afterSlide}
      heightMode="max"
      renderCenterLeftControls={({ previousSlide, currentSlide }) =>
        currentSlide > 0 ? (
          <RoundButton size={4} bg="white" onClick={previousSlide} ml={3}>
            <Icon icon={ChevronLeft} color="black" size={2} />
          </RoundButton>
        ) : null
      }
      renderCenterRightControls={({ nextSlide, currentSlide }) =>
        currentSlide < artworks.length - 1 ? (
          <RoundButton size={4} bg="white" onClick={nextSlide} mr={3}>
            <Icon icon={ChevronRight} color="black" size={2} />
          </RoundButton>
        ) : null
      }
      renderBottomCenterControls={null}
      easing="easeQuadInOut"
      cellSpacing={32}
      slidesToShow={1.1}
    >
      {artworks.map(artwork => (
        <Image
          key={artwork.id}
          src={artwork.originalUrl}
          width={'100%'}
          borderRadius={1}
        />
      ))}
    </NukaCarousel>
  );
};

export default Carousel;
