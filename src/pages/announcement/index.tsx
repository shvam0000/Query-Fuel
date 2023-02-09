import { Hero } from '../../components/announcement/';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const AnnouncementPage = () => {
  return <Hero />;
};

export default AnnouncementPage;

export const getServerSideProps = withPageAuthRequired();
