import { useUser } from '@auth0/nextjs-auth0/client';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Welcome from '../../utils/images/welcome.png';
import { Button } from '../shared';
import Link from 'next/link';

const Main = () => {
  const { user } = useUser();
  return (
    <div className="sm:h-screen flex">
      <div className="sm:w-1/2 sm:px-10 sm:pt-32 pb-10 sm:pb-0">
        <h1 className="text-3xl text-center sm:text-left sm:text-5xl font-extrabold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Welcome to Query Fuel!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
        </h1>
        <div>
          <h2 className="text-2xl pt-10">
            Query Fuel is a platform that helps you to get your{' '}
            <span className="font-bold text-primary-orange">
              doubts solved{' '}
            </span>
            and keep you updated with the{' '}
            <span className="font-bold text-primary-orange">
              latest announcements
            </span>
            .
          </h2>
        </div>
        <div className="pt-10 flex items-center">
          <div className="pr-4">
            <Link href={user ? '/feed' : '/api/auth/login'}>
              <Button type="primary">
                <h1 className="font-bold sm:text-2xl">Get Started</h1>
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/contact-us">
              <Button type="secondary">
                <h1 className="font-bold sm:text-2xl">Contact Us</h1>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10 bg-welcome h-full hidden sm:block">
        <Image src={Welcome} alt="" height={500} width={700} />
      </div>
    </div>
  );
};

export default Main;
