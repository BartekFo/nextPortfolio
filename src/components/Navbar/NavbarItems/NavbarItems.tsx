import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import NavLink from '@components/Navbar/NavLink/NavLink';
import { A, Button, Wrapper } from '@components/Navbar/NavbarItems/NavbarItems.styled';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import ToggleSwitch from '@components/Utils/ToggleSwitch/ToggleSwitch';
import useDarkMode from 'use-dark-mode';

const NavbarItems: FC<{ isNavbarOpen: boolean }> = ({ isNavbarOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const { value, toggle } = useDarkMode(false);
  const [isChecked, setIsChecked] = useState(value);

  const handleToggleClick = () => {
    setIsChecked((prevState) => !prevState);
    toggle();
  };

  return (
    <Wrapper isNavbarOpen={isNavbarOpen}>
      <NavLink url="/" linkLabel={t.NavbarItemOne} />
      <NavLink url="/about" linkLabel={t.NavbarItemTwo} />
      <NavLink url="/projects" linkLabel={t.NavbarItemThree} />
      <NavLink url="/certificates" linkLabel={t.NavbarItemFour} />
      <NavLink url="/media" linkLabel="Media" />
      <Button type="button" onClick={handleToggleClick}>
        <ToggleSwitch isChecked={isChecked} />
        <span>Dark Mode</span>
      </Button>
      <A href="mailto:bartoszformanowski@gmail.com">{t.NavbarItemFive}</A>
    </Wrapper>
  );
};

export default NavbarItems;
