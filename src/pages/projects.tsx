import styled from 'styled-components';
import { useRouter } from 'next/router';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import Layout from '@components/Layout/Layout';
import filterContentfulData from '@utils/filterContentfulData';
import CardList from '@components/Utils/CardList';
import { FilteredDataType } from '@root/@types/contentfulTypes';
import { Page } from '@root/@types/pageTypes';

const contentful = require('contentful');

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 40px 0;

  h1 {
    margin-bottom: 50px;
  }

  img {
    margin-top: 50px;
    width: 40%;
    min-width: 350px;
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
      <h1>{t.projectsSecondHeader}</h1>
      <CardList data={projectsArray} />
    </Main>
  );
};

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const client = contentful.createClient({
    space: 'a4g7t3i5v1dz',
    accessToken: 'MOvjFoYHzeV-dFoGAG4flmanvGiavMAlQx4NdWGEQjA',
  });

  const projects = await client.getEntries({
    content_type: 'projects',
  });

  const projectsArray = filterContentfulData(projects);

  return {
    props: {
      projectsArray,
    },
  };
}

export default Projects;
