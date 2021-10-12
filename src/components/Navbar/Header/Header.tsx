import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
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
import { navbarActions } from '@store/navbar';
import { RootState } from '@root/store';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isNavbarOpen = useSelector((state: RootState) => state.navbar.isNavbarOpen);

  const openNavbarHandler = () => {
    dispatch(navbarActions.openNavbar());
  };

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const changeLanguageToPolishHandler = () => {
    changeLanguage('pl');
  };

  const changeLanguageToEnglishHandler = () => {
    changeLanguage('en');
  };

  const closeNavbarHandler = useCallback(() => {
    dispatch(navbarActions.closeNavbar());
  }, [dispatch]);

  useEffect(() => {
    router.events.on('routeChangeComplete', closeNavbarHandler);

    return () => {
      router.events.off('routeChangeComplete', closeNavbarHandler);
    };
  }, [closeNavbarHandler, router.events]);

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
            <GiHamburgerMenu onClick={openNavbarHandler} />
          ) : (
            <GrClose onClick={closeNavbarHandler} />
          )}
        </IconWrapper>
      </IconContext.Provider>
    </HeaderWrapper>
  );
};

export default Header;
