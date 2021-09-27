import WelcomeHand from '@components/HomeComponents/WelcomeHand/WelcomeHand';
import MessageBubble from '@components/HomeComponents/MessageBubble/MessageBubble';
import { useRouter } from 'next/router';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import styled from 'styled-components';
import Layout from '@components/Layout/Layout';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

const Main = styled.main`
  margin-top: 180px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'welcomeWrapper textWrapper textWrapper';
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1124px) {
    margin-top: 0;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 0;
    grid-template-areas:
      'welcomeWrapper'
      'textWrapper';
  }
`;

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const messageText = t.welcomeMessageBubbleLongText;
  return (
    <Main>
      <WelcomeHand />
      <MessageBubble
        isHavingLink
        messageText={messageText}
        linkDestination="/about"
        linkText={t.welcomeMessageBubbleLink}
      />
    </Main>
  );
};

Home.getLayout = function getLayout(
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
) {
  return <Layout>{page}</Layout>;
};

export default Home;
