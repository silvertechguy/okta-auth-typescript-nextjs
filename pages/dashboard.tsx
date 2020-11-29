import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Unauthorized from '../components/Unauthorized';
import Movies from '../components/Movies';

import { useSession } from 'next-auth/client';

function Content({ session }) {
  return session ? <Movies></Movies> : <Unauthorized></Unauthorized>;
}

export default function Dashboard() {
  const [session, loading] = useSession();

  return (
    <div className="container">
      <Head>
        <title>Movies - Find Your Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      {<Content session={session} />}
    </div>
  );
}
