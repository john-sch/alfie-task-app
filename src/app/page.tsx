import React from 'react';
import Head from 'next/head';
import Task from '@components/Task/Task';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <meta name='description' content='Task management application' />
      </Head>
      <main>
        <Task />
      </main>
    </div>
  );
};

export default Home;
