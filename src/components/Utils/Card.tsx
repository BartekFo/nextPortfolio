import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import { getBoxShadow, getColor, getMedia } from '@styles/utils';

const Wrapper = styled(motion.div)`
  background-color: ${getColor('elementsColor')};
  border-radius: 20px;
  margin: 20px;
  width: 400px;
  box-shadow: ${getBoxShadow('default')};

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: 320px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  position: relative;
  border-radius: 20px 20px 0 0;

  img {
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 50%;

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
    margin: 20px 50px 30px;

    @media screen and (max-width: ${getMedia('navbar')}) {
      margin: 10px 30px;
    }
  }

  a {
    text-decoration: none;
    color: ${getColor('textColor')};
    border: 1px solid ${getColor('textColor')};
    padding: 10px 30px;
    border-radius: 20px;
  }
`;

const Card: React.FC<{ name: string; image: string; url: string }> = ({ name, image, url }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Wrapper
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <Image src={image} alt="certificate" layout="fill" />
      </ImageContainer>
      <TextContainer>
        <p>{name}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {t.projectsLink} <BsBoxArrowInUpRight />
        </a>
      </TextContainer>
    </Wrapper>
  );
};

export default Card;
