import { FC } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getColor, getFontWeight, getMedia } from '@styles/utils';

const PageLink = styled.a<{ url: string; isActive: boolean }>`
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  padding-block: 1rem;
  text-decoration: none;
  color: ${getColor('textColor')};
  width: 80%;
  margin: auto;
  border-radius: 22px;

  &:hover {
    background-color: ${getColor('navbarLinkHover')};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: ${getFontWeight('bold')};
      font-size: 1.2rem;
      transition: 0.3s ease-in-out font-size;
    `};

  @media screen and (min-width: ${getMedia('navbar')}) {
    width: 20%;
    padding: 1rem;
  }
`;

const NavLink: FC<{ url: string; linkLabel: string }> = ({ url, linkLabel }) => {
  const router = useRouter();
  const isActive = router.pathname === url;

  return (
    <Link href={url} passHref>
      <PageLink url={url} isActive={isActive}>
        {linkLabel}
      </PageLink>
    </Link>
  );
};

export default NavLink;
