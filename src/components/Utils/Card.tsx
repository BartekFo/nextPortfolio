import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';

import en from '@components/locales/en';
import pl from '@components/locales/pl';
import { getMedia } from '@styles/utils';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  width: 400px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: 350px;
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
    color: black;
    border: 1px solid black;
    padding: 10px 30px;
    border-radius: 20px;
  }
`;

const Card: React.FC<{ name: string; image: string; url: string }> = ({ name, image, url }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <Wrapper>
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
