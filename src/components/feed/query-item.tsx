import { Clap } from '@/utils/icons';
import { QueryItemProps } from '@/utils/props/props';
import { useState } from 'react';

const QueryItem: React.FC<QueryItemProps> = ({ id, query, createdBy }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>
        <span className="font-bold">Id</span> - {id}
      </h3>
      <h1>
        <span className="font-bold">Query</span> - {query}
      </h1>
      <h2>
        <span className="font-bold">Created By</span> - {createdBy}
      </h2>
      <figure
        onClick={() => setCount(count + 1)}
        className="my-5 flex items-center">
        <span className="text-4xl">
          <Clap />
        </span>
        <span>{count}</span>
      </figure>
    </div>
  );
};

export default QueryItem;
