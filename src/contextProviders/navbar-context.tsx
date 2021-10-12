import { createContext, FC, useState } from 'react';

export type NavbarContextType = {
  isNavbarOpen: boolean;
  openNavbar: () => void;
  closeNavbar: () => void;
};

export const NavbarContext = createContext<NavbarContextType>({
  isNavbarOpen: false,
  openNavbar: () => {},
  closeNavbar: () => {},
});

const NavbarProvider: FC = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavbarOpen(true);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, openNavbar, closeNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
