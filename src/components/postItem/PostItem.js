/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import window from 'global/window';
import ReactImageFallback from 'react-image-fallback';
import postItemEnhancer from './postItemEnhancer';
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';
import truncate from '../../helpers/textHelpers';
import { ROUTES } from '../../constants';
import CardLoader from '../loaders/CardLoader';

const PostTitle = styled(Link)`
  width: 100%;
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 16px;
      display: block;
`;

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  margin-bottom: 10px;
`;

const Categories = ({ data }) => {
  let newData;
  data && data.length > 0
    ? (newData = data.map((item, index) => {
        if (index > 0) {
          return (
            <React.Fragment key={item.id}>
              , <Link className="post-item__link" to={`/${ROUTES.blog}${item.slug}`}>
                {item.name}
              </Link>
            </React.Fragment>
          );
        }
        return (
          <Link className="post-item__link" key={item.id} to={`/${ROUTES.blog}${item.slug}`}>
            {item.name}
          </Link>
        );
      }))
    : (newData = null);
  return newData;
};

const pathname = window.location ? window.location.pathname : '';

const PostItem = (props) => {
  const { media, category, user, data } = props;
  const Image =
    media && media.img && media.img.medium && media.img.medium;
  const altText = media && media.img && (media.img.alt_text || data.title);
  const CategoriesData = category && category.category && category.category;
  const User = user && user.user && user.user;
  const postUrl = CategoriesData && `/blog/${CategoriesData[0].slug}/${data.slug}`;
  if (!data) {
    return <CardLoader />;
  }
  let postDate = new Date(data.date);
  postDate = postDate && moment(postDate).startOf('day').fromNow();
  return (
    <div className="post-item">
      <Link
        className="post-item__image"
        to={{
          pathname: postUrl,
        }}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
          alt={altText}
        />
      </Link>
      <div className="post-item__meta-container">
        <div>
          <CategoryContainer>
            <Categories data={CategoriesData} />
          </CategoryContainer>
          <PostTitle
            dangerouslySetInnerHTML={{ __html: truncate(data.title, 50) }}
            to={{
              pathname: postUrl,
            }}
          />
          <div
            className="post-item__excerpt"
            dangerouslySetInnerHTML={{ __html: truncate(data.excerpt, 70) }}
          />
        </div>
        <div className="post-item__meta">
          {User && (
            <Link
              className="post-item__link post-item__author"
              to={`${ROUTES.author}/${User.slug}`}
            >{User.name}
            </Link>
          )} <span className="post-item__date"><i className="far fa-clock" /> {postDate}</span>
        </div>
      </div>
    </div>
  );
};

export default postItemEnhancer(PostItem);
