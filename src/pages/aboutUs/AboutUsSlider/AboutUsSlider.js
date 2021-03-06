import React from 'react';
import styled from 'styled-components';

import JoinNowBtn from '../JoinNowBtn';

const imgUrl = //eslint-disable-line
  'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=adult-blur-brick-walls-846741.jpg&fm=jpg' //eslint-disable-line

const SliderContainer = styled.div`
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  position: relative;
  @media only screen and (max-width: 760px) {
    height: 50vh;
  }
`;
const SliderContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SliderHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 3.4px;
  line-height: 1.2;
  @media only screen and (max-width: 1024px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

const AboutUsSlider = () => (
  <SliderContainer image={imgUrl}>
    <SliderContainerWrapper />
    <SliderHeader>
      <span>Join Mixtape Madness</span>
      <br />
      <span>to have your music played around</span>
      <br />
      the world.
    </SliderHeader>
    <JoinNowBtn />
  </SliderContainer>
);

export default AboutUsSlider;
