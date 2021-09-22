import { FC } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageLink = styled.a<{ url: string; isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: white;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 22px;
      width: 120%;
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
