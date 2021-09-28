import { FC } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import NavLink from '@components/Navbar/NavLink/NavLink';
import en from '@components/locales/en';
import pl from '@components/locales/pl';
import {
  ListWrapper,
  ListItem,
  Wrapper,
} from '@components/Navbar/MobileNavbarItems/MoblieNavbarItems.styled';
import { A } from '@components/Navbar/NavbarItems/NavbarItems.styled';

const MobileNavbarItems: FC<{ isNavbarOpen: boolean }> = ({ isNavbarOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const modalVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isNavbarOpen && (
        <Wrapper variants={modalVariants} initial="closed" animate="open" exit="closed">
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
            <ListItem>
              <A href="mailto:bartoszformanowski@gmail.com">{t.NavbarItemFive}</A>
            </ListItem>
          </ListWrapper>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbarItems;
