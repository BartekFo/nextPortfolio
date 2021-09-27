import { FC } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getFontWeight } from '@styles/utils';

const PageLink = styled.a<{ url: string; isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  border-radius: 22px;
  width: 120%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    height: 80%;
    border-radius: 22px;
    width: 120%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: white;
      font-weight: ${getFontWeight('bold')};

      &:hover {
        background-color: white;
      }
    `}
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
