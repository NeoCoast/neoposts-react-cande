import { useGetPostsQuery } from './services/api';

const PostsList = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};

export default PostsList;
