import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import WelcomeHand from '@components/HomeComponents/WelcomeHand/WelcomeHand';
import MessageBubble from '@components/HomeComponents/MessageBubble/MessageBubble';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import { getMedia } from '@styles/utils';

const Main = styled.main`
  margin: 180px 2rem 0;

  @media screen and (max-width: ${getMedia('navbar')}) {
    margin: 0;
  }
`;

const CenterWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'welcomeWrapper textWrapper textWrapper';
  justify-items: start;
  align-items: center;

  @media screen and (max-width: 1124px) {
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

const HomeHero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const messageText = t.welcomeMessageBubbleLongText;

  return (
    <Main>
      <CenterWrapper>
        <WelcomeHand />
        <MessageBubble
          isHavingLink
          messageText={messageText}
          linkDestination="/about"
          linkText={t.welcomeMessageBubbleLink}
        />
      </CenterWrapper>
    </Main>
  );
};

export default HomeHero;
