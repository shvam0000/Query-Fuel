import { QueryItemProps } from '@/utils/props/props';

const QueryItem: React.FC<QueryItemProps> = ({ id, query, createdBy }) => {
  return (
    <div>
      <h3>id - {id}</h3>
      <h1>query - {query}</h1>
      <h2>createdBy - {createdBy}</h2>
    </div>
  );
};

export default QueryItem;
