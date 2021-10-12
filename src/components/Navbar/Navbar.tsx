import { useSelector } from 'react-redux';

import { RootState } from '@root/store';
import NavbarItems from '@components/Navbar/NavbarItems/NavbarItems';
import { Nav, NavCenter } from '@components/Navbar/Navbar.styled';
import Header from '@components/Navbar/Header/Header';

const Navbar = () => {
  const isNavbarOpen = useSelector((state: RootState) => state.navbar.isNavbarOpen);

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
