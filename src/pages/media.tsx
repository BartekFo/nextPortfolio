import styled from 'styled-components';

import FacebookMedia from '@components/MediaComponents/Facebook/FacebookMedia';
import GitHubMedia from '@components/MediaComponents/GitHub/GitHubMedia';
import LinkedInMedia from '@components/MediaComponents/LinkedIn/LinkedInMedia';
import TwitterMedia from '@components/MediaComponents/Twitter/TwitterMedia';
import Layout from '@components/Layout/Layout';
import { Page } from '@root/@types/pageTypes';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  align-items: center;
  justify-content: space-around;
  margin: 100px auto;
`;

const Media: Page = () => {
  return (
    <Main>
      <FacebookMedia />
      <GitHubMedia />
      <LinkedInMedia />
      <TwitterMedia />
    </Main>
  );
};

Media.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Media;
