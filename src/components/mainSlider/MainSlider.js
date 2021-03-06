import React from 'react';
import Slider from 'react-slick';
import SliderContent from './sliderContent';
import mainSliderEnhancer from './mainSliderEnhancer';
import CardLoader from '../loaders/CardLoader';

import { RESPONSIVE_BREAKPOINTS } from '../../constants';

import IconButton from '../IconButton/IconButton';

const PrevArrow = (
  { onClick }, // eslint-disable-line
) => <IconButton className="main-slider__nav main-slider__nav--prev" iconClassName="fas fa-chevron-left" onClick={onClick} />;

const NextArrow = (
  { onClick }, // eslint-disable-line
) => <IconButton className="main-slider__nav main-slider__nav--next" iconClassName="fas fa-chevron-right" onClick={onClick} />;


const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  mobileFirst: true,
  centerMode: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: RESPONSIVE_BREAKPOINTS.tablet,
      settings: {
        infinite: true,
        dots: false,
        autoplay: false,
        arrows: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MainSlider = ({ data }) => {
  const loading = data && data.loading && data.loading;
  const Posts = data && data.Posts && data.Posts;

  return (
    <div className="main-slider">
      <div className="main-slider__container">
        <Slider {...settings}>
          {loading ? <CardLoader /> : Posts && Posts.map(item => (
            <SliderContent loading={loading} key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default mainSliderEnhancer(MainSlider);
