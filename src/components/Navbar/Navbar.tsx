import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { RootState } from '@root/store';
import { navbarActions } from '@store/navbar';
import PolandFlag from '@assets/Poland.png';
import UKFlag from '@assets/UK.png';
import NavbarItems from '@components/Navbar/NavbarItems/NavbarItems';
import {
  Nav,
  H1,
  P,
  ChangeLangButton,
  IconWrapper,
  LogoWrapper,
} from '@components/Navbar/Navbar.styled';
import MobileNavbarItems from '@components/Navbar/MobileNavbarItems/MobileNavbarItems';

const Navbar = () => {
  const isNavbarOpen = useSelector((state: RootState) => state.navbar.isNavbarOpen);
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1124px)' });
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const openNavbarHandler = () => {
    dispatch(navbarActions.openNavbar());
  };

  const closeNavbarHandler = () => {
    dispatch(navbarActions.closeNavbar());
  };

  const changeLanguageToPolishHandler = () => {
    changeLanguage('pl');
  };

  const changeLanguageToEnglishHandler = () => {
    changeLanguage('en');
  };

  return (
    <Nav isTabletOrMobile={isTabletOrMobile}>
      <LogoWrapper>
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
      </LogoWrapper>

      {!isTabletOrMobile && <NavbarItems />}
      {isTabletOrMobile && (
        <>
          <IconContext.Provider value={{ color: 'black', size: '2em' }}>
            <IconWrapper>
              {!isNavbarOpen ? (
                <GiHamburgerMenu onClick={openNavbarHandler} />
              ) : (
                <GrClose onClick={closeNavbarHandler} />
              )}
            </IconWrapper>
          </IconContext.Provider>
          <MobileNavbarItems isNavbarOpen={isNavbarOpen} />
        </>
      )}
    </Nav>
  );
};

export default Navbar;
