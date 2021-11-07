import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import Layout from '@components/Layout/Layout';
import filterContentfulData from '@utils/filterContentfulData';
import CardList from '@components/Utils/CardList';
import { FilteredDataType } from '@root/@types/contentfulTypes';
import { Page } from '@root/@types/pageTypes';
import { getMedia } from '@styles/utils';

const contentful = require('contentful');

const Main = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  margin: 100px auto 0;

  img {
    margin-top: 50px;
    width: 40%;
    min-width: 350px;
  }
`;

const H1 = styled(motion.h1)`
  margin-bottom: 50px;

  @media (max-width: ${getMedia('navbar')}) {
    padding-inline: 20px;
  }
`;

const Projects: Page<{
  projectsArray: FilteredDataType[];
}> = ({ projectsArray }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Main>
      <H1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t.projectsSecondHeader}
      </H1>
      <CardList data={projectsArray} />
    </Main>
  );
};

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const projects = await client.getEntries({
    content_type: 'projects',
  });

  const projectsArray = filterContentfulData(projects);

  return {
    props: {
      projectsArray,
    },
    revalidate: 86400,
  };
}

export default Projects;
