import React from 'react';
import { FeedForm, QueryList, Search } from '@/components/feed';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const FeedPage = () => {
  return (
    <div>
      <FeedForm />

      <QueryList />
    </div>
  );
};

export default FeedPage;

export const getServerSideProps = withPageAuthRequired();
