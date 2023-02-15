import { Logo } from '@/utils/icons';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <figure className="text-primary-orange hover:animate-spin">
            <Logo />
          </figure>
          <h2 className="text-3xl font-medium text-primary-black">
            Query Fuel
          </h2>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <Link href="/contact-us" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Query Fuel™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
