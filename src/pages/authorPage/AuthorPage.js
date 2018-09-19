import React from 'react'
import styled from 'styled-components'

import Footer from 'components/footer'
import ProfileInfo from 'components/profileInfo'

import ResentPosts from './ResentPosts'
import authorPageEnhancer from './authorPageEnhancer'

const AuthorPageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const LineSeparator = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background: #e0e0e0;
`
const AuthorData = {
  img:
    'https://www.careersinpoland.com/public/file/articles//845_tips-to-land-secure-job-in-poland-polish-cv-resume.jpg',
  name: 'Bianca Grace',
  ocupation: 'Music Editor',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', //eslint-disable-line
}

const PostsFirstPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    type: 'News',
    shares: 20,
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
  },
]

const PostsSecondPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
    views: '10,000',
  },
]
const AuthorPage = ({ width }) => (
  <AuthorPageContainer>
    <ProfileInfo data={AuthorData} />
    <LineSeparator />
    <ResentPosts
      PostsFirstPart={PostsFirstPart}
      PostsSecondPart={PostsSecondPart}
      width={width}
    />
    <Footer />
  </AuthorPageContainer>
)

export default authorPageEnhancer(AuthorPage)
