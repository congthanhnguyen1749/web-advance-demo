import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
