import styled from 'styled-components';

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
  max-width: 1440px;
  margin: 100px auto 0;

  img {
    margin-top: 50px;
    width: 40%;
    min-width: 350px;
  }
`;

const Certificates: Page<{
  certificatesArray: FilteredDataType[];
}> = ({ certificatesArray }) => (
  <Main>
    <CardList data={certificatesArray} />
  </Main>
);

Certificates.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const certificates = await client.getEntries({
    content_type: 'certificates',
  });

  const certificatesArray = filterContentfulData(certificates);

  return {
    props: {
      certificatesArray,
    },
  };
}

export default Certificates;
