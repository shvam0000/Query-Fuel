import { InnovationCardProps } from '@/utils/props/props';
import React from 'react';

const InnovationCard: React.FC<InnovationCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
      <figure className="flex justify-center">{img}</figure>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InnovationCard;
