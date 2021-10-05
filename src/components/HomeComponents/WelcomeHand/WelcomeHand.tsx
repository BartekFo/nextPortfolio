import BlackHand from '@assets/blackHand.svg';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { getAnimation, getColor, getFontFamily, getFontWeight } from '@styles/utils';
import en from '@components/locales/en';
import pl from '@components/locales/pl';

const Wrapper = styled.div`
  grid-area: welcomeWrapper;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: ${getFontFamily('pacifico')};
  font-size: 3rem;
  font-weight: ${getFontWeight('regular')};
`;

const WelcomeText = styled.p`
  font-size: 1.5rem;
  text-decoration: underline;
  margin-bottom: 55px;
  text-align: center;
`;

// @ts-ignore
const StyledHand = styled(BlackHand)`
  animation: ${getAnimation('waveAnimation')} 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  fill: ${getColor('textColor')};
`;

const WelcomeHand = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Wrapper>
      <Logo>{t.welcomeMessageBigText}</Logo>
      <WelcomeText>{t.welcomeMessage}</WelcomeText>
      <StyledHand />
    </Wrapper>
  );
};

export default WelcomeHand;
