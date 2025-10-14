import PropTypes from 'prop-types';

import { formatDate } from '@helpers/formatDate';

import Profile from '@assets/icons/profile.svg';

import './styles.scss';

const Post = ({ post }) => (
  <div className="post">
    <div className = "post__image-container">
      <img src={Profile} alt="" aria-hidden="true" className="post__author-img" />
    </div>
    <div>
      <p className="post__author_name">{post.author.name}</p>
      <p className="post__author_email">{post.author.email}</p>
      <p className="post__body">{post.body}</p>
      <span className="post__date">{formatDate(post.publishedAt)}</span>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    body: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
