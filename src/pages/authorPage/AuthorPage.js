/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';

import ProfileInfo from 'components/profileInfo';

import ResentPosts from './ResentPosts';
import authorPageEnhancer from './authorPageEnhancer';

const AuthorPageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const LineSeparator = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background: #e0e0e0;
`;

const AuthorPage = ({ width, data }) => {
  const userData = data && data.user && data.user;
  const userId = data && data.user && data.user.id;
  const loading = data && data.loading && data.loading;
  console.log(userId);
  return (
    <AuthorPageContainer>
      <ProfileInfo data={userData} />
      <LineSeparator />
      <ResentPosts loading={loading} id={userId} />
    </AuthorPageContainer>
  );
};

export default authorPageEnhancer(AuthorPage);
