import { useRouter } from 'next/router';
import styled from 'styled-components';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import { getMedia } from '@styles/utils';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import Layout from '@components/Layout/Layout';

const Main = styled.main`
  width: 80%;
  margin: 100px auto;
  text-align: left;

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: 95%;
    margin: 80px auto;
  }
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  @media screen and (max-width: ${getMedia('navbar')}) {
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: 80px auto;
  font-size: 1.5rem;

  p {
    margin-bottom: 30px;
  }
`;

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Main>
      <AboutTitle>{t.aboutHeader}</AboutTitle>
      <TextWrapper>
        <p>{t.aboutFirstText}</p>
        <p>{t.aboutSecondText}</p>
        <p>{t.aboutThirdText}</p>
        <p>{t.aboutFourthText}</p>
      </TextWrapper>
    </Main>
  );
};

About.getLayout = function getLayout(
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
) {
  return <Layout>{page}</Layout>;
};

export default About;
