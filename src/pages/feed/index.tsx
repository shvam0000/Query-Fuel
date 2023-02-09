import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const FeedPage = () => {
  return <div>FeedPage</div>;
};

export default FeedPage;

export const getServerSideProps = withPageAuthRequired();
