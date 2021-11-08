import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { SiStyledComponents, SiNextDotJs } from 'react-icons/si';
import { motion } from 'framer-motion';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import FaceImage from '@assets/face.jpg';
import { getColor, getMedia } from '@styles/utils';

const Main = styled.main`
  width: 80%;
  max-width: 1440px;
  margin: 100px auto;
  text-align: left;

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: 90%;
    margin: 80px auto;
  }
`;

const AboutTitle = styled(motion.h1)`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.1em;
`;

const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  background-color: ${getColor('mainBackground')};
  text-align: center;
  box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
  position: relative;
  padding: 15px 15px 30px;
  min-width: 320px;
  max-width: 28rem;
  height: max-content;

  @media screen and (max-width: 1320px) {
    margin-bottom: 5rem;
  }

  & > svg {
    font-size: 3rem;
    color: ${getColor('textColor')};
    margin-inline: 1rem;
    margin-top: 2rem;
  }
`;

const Card = styled(motion.div)`
  border: 1px solid rgb(0 0 0 / 13%);
  max-width: 60ch;
`;

const AppleBar = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: rgb(0 0 0 / 7%);
  border-bottom: 1px solid rgb(0 0 0 / 13%);

  & > svg {
    margin-right: 0.5rem;
  }
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: 80px auto;
  font-size: 1rem;

  p {
    margin-bottom: 30px;
  }
`;

const AboutHero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Main>
      <AboutTitle
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t.aboutHeader}
      </AboutTitle>
      <Wrapper>
        <ImageWrapper
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src={FaceImage} layout="responsive" width={300} height={300} />
          <FaReact />
          <SiStyledComponents />
          <SiNextDotJs />
        </ImageWrapper>
        <Card
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AppleBar>
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" strokeWidth="3" fill="red" />
              Sorry, your browser does not support inline SVG.
            </svg>
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" strokeWidth="3" fill="orange" />
              Sorry, your browser does not support inline SVG.
            </svg>
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" strokeWidth="3" fill="green" />
              Sorry, your browser does not support inline SVG.
            </svg>
          </AppleBar>
          <TextWrapper>
            <p>{t.aboutFirstText}</p>
            <p>{t.aboutSecondText}</p>
            <p>{t.aboutThirdText}</p>
            <p>{t.aboutFourthText}</p>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Main>
  );
};

export default AboutHero;
