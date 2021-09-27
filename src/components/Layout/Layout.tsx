import { FC } from 'react';

import Navbar from '@components/Navbar/Navbar';

const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
