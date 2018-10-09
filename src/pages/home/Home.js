/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint no-unused-vars: 0 */
/* eslint operator-linebreak: 0 */
/* eslint indent: 0 */

import React from 'react'
import styled from 'styled-components'

import LazyLoad from 'react-lazyload'
import MainSlider from 'components/mainSlider'
import Footer from 'components/footer'
import Download from 'components/download'
import Subscribe from 'components/subscribe'
import Videos from 'components/videos'
import SliderPhoto from 'resources/assets/img/Live-Music.jpg'
import SliderPhotoSecond from 'resources/assets/img/music.jpg'
import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'
import WhatsOn from './whatsOn'
import Interviews from './interviews'
import Posts from './posts'
import homeEnhancer from './homeEnhancer'
import Reviews from './reviews'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

const HaveToListenContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`

const SubscribeContainer = styled.div`
  margin: 40px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`

const SectionHeader = styled.span`
  font-weight: 600;
  font-size: 28px;
`

const SectionSubHeader = styled.span`
  font-size: 17.5px;
  letter-spacing: 1.1px;
  font-weight: 600;
`

const mainSliderData = [SliderPhoto, SliderPhotoSecond]

const Home = ({ sliderData }) => (
  <Container>
    {sliderData &&
      sliderData.Posts && (
        <LazyLoad once offset={100}>
          {' '}
          <MainSlider data={sliderData.Posts} />{' '}
        </LazyLoad>
      )}
    <Posts />
    <LazyLoad once offset={0}>
      <Interviews />
    </LazyLoad>
    <Download />
    <LazyLoad once offset={100}>
      <WhatsOn />
    </LazyLoad>
    <SubscribeContainer>
      <Subscribe />
    </SubscribeContainer>
    <LazyLoad once offset={100}>
      <Reviews />
    </LazyLoad>
    <LazyLoad once offset={100}>
      <Videos />
    </LazyLoad>
  </Container>
)

export default homeEnhancer(Home)
