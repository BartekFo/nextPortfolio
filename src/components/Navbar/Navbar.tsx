import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';

import { RootState } from '@root/store';
import { navbarActions } from '@store/navbar';
import classes from './Navbar.module.css';

import NavbarItems from './NavbarItems/NavbarItems';
import MobileNavbarItems from './MobileNavbarItems/MobileNavbarItems';
import PolandFlag from '../../assets/Poland.png';
import UKFlag from '../../assets/UK.png';

const Navbar = () => {
  const isNavbarOpen = useSelector((state: RootState) => state.navbar.isNavbarOpen);
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1124px)' });

  const NavStyles = `${classes.main} ${
    isNavbarOpen && isTabletOrMobile && classes.mobileNavbarOpen
  }`;

  const openNavbarHandler = () => {
    dispatch(navbarActions.openNavbar());
  };

  const closeNavbarHandler = () => {
    dispatch(navbarActions.closeNavbar());
  };

  const changeLanguageToPolishHandler = () => {
    i18next.changeLanguage('pl');
  };

  const changeLanguageToEnglishHandler = () => {
    i18next.changeLanguage('en');
  };

  return (
    <nav className={NavStyles}>
      <div>
        <h1 className={classes.logo}>
          <Link href="/">Fórmanowski</Link>
        </h1>
        <p className={classes.changeLang}>
          <button
            type="button"
            onClick={changeLanguageToPolishHandler}
            className={classes.changeLangBtn}
          >
            <img src={PolandFlag} alt="Poland Flag" />
          </button>
          <button
            type="button"
            onClick={changeLanguageToEnglishHandler}
            className={classes.changeLangBtn}
          >
            <img src={UKFlag} alt="United Kingdom Flag" />
          </button>
        </p>
      </div>

      {!isTabletOrMobile && <NavbarItems />}
      {isTabletOrMobile && (
        <IconContext.Provider value={{ color: 'black', size: '2em' }}>
          <div className={classes.iconWrapper}>
            {!isNavbarOpen ? (
              <GiHamburgerMenu onClick={openNavbarHandler} />
            ) : (
              <GrClose onClick={closeNavbarHandler} />
            )}
          </div>
        </IconContext.Provider>
      )}
      <MobileNavbarItems isNavbarOpen={isNavbarOpen} className={classes.navbarItemsContainer} />
    </nav>
  );
};

export default Navbar;
