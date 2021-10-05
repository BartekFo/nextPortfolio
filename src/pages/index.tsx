import WelcomeHand from '@components/HomeComponents/WelcomeHand/WelcomeHand';
import MessageBubble from '@components/HomeComponents/MessageBubble/MessageBubble';
import { useRouter } from 'next/router';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import styled from 'styled-components';
import Layout from '@components/Layout/Layout';
import { Page } from '@root/@types/pageTypes';

const Main = styled.main`
  margin: 180px auto 0;
  max-width: 1440px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'welcomeWrapper textWrapper textWrapper';
  justify-items: start;
  align-items: center;

  @media screen and (max-width: 1124px) {
    margin-top: 80px;
    justify-items: center;
    gap: 48px;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'welcomeWrapper'
      'textWrapper';
  }
`;

const Home: Page = () => {
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

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
