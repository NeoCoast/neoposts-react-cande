import { useGetPostsQuery } from '@services/api';

import Post from '@components/Post';
import './styles.scss';

const PostsList = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="posts-list-container">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="posts-list-container">
        <div>Something went wrong, please reload</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="posts-list-container">
        <div>No posts available.</div>
      </div>
    );
  }

  return (
    <div className="posts-list-container">
      {data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostsList;
