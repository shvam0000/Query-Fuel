import React from 'react';
import { FeedForm, QueryList, Search } from '@/components/feed';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const FeedPage = () => {
  return (
    <div>
      <FeedForm />
      <div className="w-1/3 m-auto">
        <Search />
      </div>
      <QueryList />
    </div>
  );
};

export default FeedPage;

export const getServerSideProps = withPageAuthRequired();
