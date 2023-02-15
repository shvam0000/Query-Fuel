import { Github, Linkedin } from '@/utils/icons';
import { TeamCardProps } from '@/utils/props/props';
import React from 'react';

const TeamCard: React.FC<TeamCardProps> = ({
  url,
  name,
  github,
  linkedin,
  subtitle,
}) => {
  return (
    <div className="flex justify-center mb-6">
      <div className=" items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <figure>
          <img
            className="rounded-lg sm:rounded-none sm:rounded-l-lg"
            src={url}
            alt={name}
            height={200}
            width={200}
          />
        </figure>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{name}</a>
          </h3>
          <span className="text-gray-500 dark:text-gray-400">{subtitle}</span>
          <div className="flex text-2xl text-primary-black py-10">
            <a href={github} className="pr-2">
              <Github />
            </a>
            <a href={linkedin}>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
