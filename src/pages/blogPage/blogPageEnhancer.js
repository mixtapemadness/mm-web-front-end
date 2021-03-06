/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint no-unused-vars: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* global googletag */
import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import getPostBySlug from 'graphql/getPostBySlug.graphql';
import { loadDataAsync, withAuthor, withMedia } from 'hocs';
import window from 'global/window';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPostBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
        },
      }),
    },
  }),
  branch(
    ({ data }) =>
      !!(data && data.Post && data.Post.featured_media),
    withMedia,
  ),
  withStateHandlers(
    () => ({
      fetchPrev: false,
      fetchNext: false,
      date: '',
      showSpinner: true,
      category: '',
    }),
    {
      updateSpinner: (props) => (showSpinner) => ({
        showSpinner,
      }),
      handlePrev: ({ fetchPrev }) => date => ({ fetchPrev: true, date }),
      handleNext: ({ fetchNext }) => date => ({ fetchNext: true, date }),
    },
  ),
  lifecycle({
    constructor() {
      this.props.updateSpinner(true);
    },
    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.updateSpinner(false);
    },
    componentWillReceiveProps(nextProps, prevProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        window.scrollTo(0, 0);
      }
    },
  }),
  branch(
    ({ data }) => !!(data && data.Post && data.Post.author),
    withAuthor,
  ),
);
