import React from 'react'
import styled from 'styled-components'
import TopVideo from 'components/topVideo'

const TopVideos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  @media only screen and (max-width: 1130px) {
    justify-content: normal;
  }
`

const Header = styled.h1`
  width: 100%;
  color: #111;
  margin: 0;
`

const MoreVideos = styled.h3`
  width: 100%;
  color: #111;
  cursor: pointer;
`

export default ({ data }) => (
  <TopVideos>
    <Header>Top Music Videos</Header>
    {data.map(item => (
      <TopVideo data={item} />
    ))}
    <MoreVideos>More Videos +</MoreVideos>
  </TopVideos>
)
