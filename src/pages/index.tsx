import Layout from '@components/Layout/Layout';
import { Page } from '@root/@types/pageTypes';
import HomeHero from '@components/HomeComponents/HomeHero';

const Home: Page = () => <HomeHero />;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
