import NavLink from '@components/Navbar/NavLink/NavLink';
import {
  ListWrapper,
  A,
  ListItem,
  Button,
} from '@components/Navbar/NavbarItems/NavbarItems.styled';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

const NavbarItems = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const darkMode = useDarkMode(false);

  return (
    <>
      <ListWrapper>
        <ListItem>
          <NavLink url="/" linkLabel={t.NavbarItemOne} />
        </ListItem>
        <ListItem>
          <NavLink url="/about" linkLabel={t.NavbarItemTwo} />
        </ListItem>
        <ListItem>
          <NavLink url="/projects" linkLabel={t.NavbarItemThree} />
        </ListItem>
        <ListItem>
          <NavLink url="/certificates" linkLabel={t.NavbarItemFour} />
        </ListItem>
        <ListItem>
          <NavLink url="/media" linkLabel="Media" />
        </ListItem>
      </ListWrapper>
      <A href="mailto:bartoszformanowski@gmail.com">{t.NavbarItemFive}</A>
      <Button type="button" onClick={darkMode.toggle}>
        {darkMode.value ? <FaMoon /> : <FaRegMoon />}
        Dark Mode
      </Button>
    </>
  );
};

export default NavbarItems;
