import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useRouter } from 'next/router';

import {
  ChangeLangButton,
  H1,
  HeaderWrapper,
  IconWrapper,
  P,
} from '@components/Navbar/Header/Header.styled';
import PolandFlag from '@assets/Poland.png';
import UKFlag from '@assets/UK.png';
import { NavbarContext } from '@contextProviders/navbar-context';

const Header = () => {
  const router = useRouter();
  const { openNavbar, closeNavbar, isNavbarOpen } = useContext(NavbarContext);

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const changeLanguageToPolishHandler = () => {
    changeLanguage('pl');
  };

  const changeLanguageToEnglishHandler = () => {
    changeLanguage('en');
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', closeNavbar);

    return () => {
      router.events.off('routeChangeComplete', closeNavbar);
    };
  }, [closeNavbar, router.events]);

  return (
    <HeaderWrapper>
      <header>
        <H1>
          <Link href="/">Fórmanowski</Link>
        </H1>
        <P>
          <ChangeLangButton type="button" onClick={changeLanguageToPolishHandler}>
            <Image src={PolandFlag} alt="Poland Flag" layout="fill" />
          </ChangeLangButton>
          <ChangeLangButton type="button" onClick={changeLanguageToEnglishHandler}>
            <Image src={UKFlag} alt="United Kingdom Flag" layout="fill" />
          </ChangeLangButton>
        </P>
      </header>
      <IconContext.Provider value={{ size: '2em' }}>
        <IconWrapper>
          {!isNavbarOpen ? (
            <GiHamburgerMenu onClick={openNavbar} />
          ) : (
            <GrClose onClick={closeNavbar} />
          )}
        </IconWrapper>
      </IconContext.Provider>
    </HeaderWrapper>
  );
};

export default Header;
