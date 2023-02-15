import React from 'react';
import TeamCard from './team-card';

const teamData = [
  {
    name: 'Shivam Shekhar',
    subtitle: 'Full Stack Web Developer',
    github: 'https://github.com/shvam0000',
    linkedin: 'https://www.linkedin.com/in/shivam-shekhar-062950182/',
    url: 'https://avatars.githubusercontent.com/u/60486289?v=4',
  },
  {
    name: 'Reeti Jha',
    subtitle: 'Full Stack App Developer',
    github: 'https://www.github.com/Reeti1605',
    linkedin: 'https://www.linkedin.com/in/reeti-jha-9672691b4/',
    url: 'https://avatars.githubusercontent.com/u/70524989?v=4',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Meet the team behind Query Fuel
          </p>
        </div>
        <div className="flex justify-evenly">
          {teamData.map((data) => (
            <TeamCard key={data.github} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
