import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { getAnimation, getColor, getFontFamily, getFontWeight } from '@styles/utils';
import BlackHand from '@assets/blackHand.svg';
import en from '@components/locales/en';
import pl from '@components/locales/pl';

const Wrapper = styled(motion.div)`
  grid-area: welcomeWrapper;
  display: flex;
  width: 100%;
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
  padding-inline: 1.75rem;
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
    <Wrapper
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      }}
    >
      <Logo>{t.welcomeMessageBigText}</Logo>
      <WelcomeText>{t.welcomeMessage}</WelcomeText>
      <StyledHand />
    </Wrapper>
  );
};

export default WelcomeHand;
