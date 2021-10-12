import { useContext } from 'react';

import NavbarItems from '@components/Navbar/NavbarItems/NavbarItems';
import { Nav, NavCenter } from '@components/Navbar/Navbar.styled';
import Header from '@components/Navbar/Header/Header';
import { NavbarContext } from '@contextProviders/navbar-context';

const Navbar = () => {
  const { isNavbarOpen } = useContext(NavbarContext);

  return (
    <Nav>
      <NavCenter>
        <Header />
        <NavbarItems isNavbarOpen={isNavbarOpen} />
      </NavCenter>
    </Nav>
  );
};

export default Navbar;
