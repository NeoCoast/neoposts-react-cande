import Header from '@components/Header';
import ProfileMenu from '@components/ProfileMenu';
import PostsList from '@components/PostsList';

import './styles.scss';

const Home = () => (
  <>
    <Header />
    <div className="home__container">
      <ProfileMenu />
      <PostsList />
    </div>
  </>
);

export default Home;
