/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'

import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

const TrendingItemContainer = styled.div`
  width: 375px;
  @media only screen and (max-width: 1150px) {
    width: 61.458%;
    margin-top: 20px;
  }
`
const PhotoContainer = styled.div`
  width: 100%
  height: 200px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
`
const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
`
const TypeContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`
const Span = styled.span`
  ${p => p.color && `color: ${p.color}`};
  ${p => p.bold && 'font-weight: bold'};
  ${p => p.size && `font-size: ${p.size}`};
  ${p => p.lspacing && `letter-spacing: ${p.lspacing}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
`
const Type = styled.span`
  color: #ff9d00;
  font-weight: bold;
`
const Header = styled.span`
  font-size: 20px;
  word-break: break-word;
  margin-bottom: 20px;
  min-height: 48px;
  ${p => p.height === true && 'height: 130px'};
  font-weight: bold;
  color: #000000;
  text-transform: capitalize;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`
const TrendingItem = ({ data, height }) => (
  <TrendingItemContainer>
    <PhotoContainer picture={data.picture} />
    <ContentContainer>
      <TypeContainer>
        <Span color="black" bold>
          Trending / <Type>{data.type}</Type>
        </Span>
      </TypeContainer>
      <Header height={height}>{data.header}</Header>
      <Span maxHeight={60} color="#666666" lspacing={1.2} mb={20}>
        {data.text}
      </Span>
      <Span color="black" mb={20}>
        By
        <Span color="#FF9D00">{data.author}</Span>
      </Span>
      <FlexDiv jc="space-between">
        <FlexDiv>
          <Img src={ViewsIcon} alt="view" height={20} />
          <Span mt={2} ml={10} color="#666666">
            {data.views}
            {' Views'}
          </Span>
        </FlexDiv>
        <Img src={SignalBarsIcon} alt="bars" height={18} />
      </FlexDiv>
    </ContentContainer>
  </TrendingItemContainer>
)

export default TrendingItem
