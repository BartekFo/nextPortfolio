import { NextPage } from 'next';
import { ReactNode } from 'react';
import { AppProps } from 'next/app';

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type Props = AppProps & {
  Component: Page;
};
