import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode } from 'react';
import AppLayout from 'src/layout/AppLayout';

import '../styles/globals.css';

import LinearProgress from '@/components/LinearProgress';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout> {page}</AppLayout>);

  return (
    <>
      <LinearProgress />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
