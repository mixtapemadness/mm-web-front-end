import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PlayIcon from 'resources/assets/svg/Play.svg'
import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

const Container = styled.div`
  width: 575px;
  @media only screen and (max-width: 1190px) {
    :nth-child(even) {
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 850px) {
    width: 61.458%;
    margin-top: 20px;
    :nth-child(even) {
      margin-left: 0px;
    }
  }
`

const PhotoContainer = styled.div`
  width: 100%
  height: 300px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  display: flex;
  height: 107px;
  box-sizing: content-box;
`

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
`

const LeftSide = styled.div`
  width: calc(40% - 15px);
  display: flex;
  flex-direction: column;
`
const Type = styled.span`
  color: #ff9d00;
  font-size: 13px;
  font-weight: bold;
`
const Name = styled.span`
  font-size: 30px;
  color: black;
`
const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #e7e7e7;
  margin: 0px 15px;
`
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 15px);
`
const Text = styled.span`
  color: #666666;
  font-size: 14px;
  word-break: break-word;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
`
// const LittleIcon = styled.img`
//   ${p => p.height && `height: ${p.height}px`};
//   ${p => p.pointer && 'cursor: pointer'};
// `
const Span = styled.span`
  color: #666666;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 2px;
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`

const WhatsOnComponent = ({ data }) => (
  <Container>
    <PhotoContainer picture={data.picture}>
      {data.type === 'Video' && <Icon src={PlayIcon} alt="play-icon" />}
    </PhotoContainer>
    <ContentContainer>
      <LeftSide>
        <Type>{data.type}</Type>
        <Name>{data.name}</Name>
      </LeftSide>
      <Line />
      <RightSide>
        <Text>{data.text}</Text>
        <FlexDiv mt={18}>
          <FlexDiv jc="space-between" width="100%">
            <FlexDiv>
              <Img src={ViewsIcon} alt="view" height={20} />
              <Span mt={2} ml={10}>
                {data.views}
                {' Views'}
              </Span>
            </FlexDiv>
            <Img src={SignalBarsIcon} alt="bars" height={18} />
          </FlexDiv>
        </FlexDiv>
      </RightSide>
    </ContentContainer>
  </Container>
)

WhatsOnComponent.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WhatsOnComponent
