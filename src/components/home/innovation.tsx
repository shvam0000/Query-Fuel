import React from 'react';
import InnovationCard from './innovation-card';
import { Innovation1, Innovation2, Innovation3 } from '@/utils/icons';

const innovationData = [
  {
    img: <Innovation1 />,
    title: 'Personalized Support',
    description:
      'Personalized Support is given on this platform for all the doubts and queries',
  },
  {
    img: <Innovation2 />,
    title: 'Access to Information',
    description:
      'Everyone will have access to the doubts and its answers as all the queries and announcements will be pubic and visible to everyone',
  },
  {
    img: <Innovation3 />,
    title: 'Community Building',
    description:
      'This platform will help in building a community of students and teachers who can help each other',
  },
];

const Innovation = () => {
  return (
    <div>
      <h1 className="flex justify-center py-5 sm:py-10 font-bold sm:font-extrabold text-xl sm:text-4xl">
        Innovation behind Query-Fuel
      </h1>
      <div className="sm:flex justify-evenly items-center">
        {innovationData.map((data) => (
          <div className="py-5 sm:py-0" key={data.title}>
            <InnovationCard
              img={data.img}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
