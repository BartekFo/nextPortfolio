import Layout from '@components/Layout/Layout';
import { Page } from '@root/@types/pageTypes';
import AboutHero from '@components/aboutComponents/AboutHero';

const About: Page = () => <AboutHero />;

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
