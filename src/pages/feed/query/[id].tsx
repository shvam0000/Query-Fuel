import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const QueryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [createdBy, setCreatedBy] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  console.log(typeof id);

  useEffect(() => {
    axios
      .get('http://localhost:3001/query/' + id)
      .then((res) => {
        console.log(res.data.query.createdBy);
        setCreatedBy(res.data.query.createdBy);
        setQuery(res.data.query.query);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h1>Created by - {createdBy}</h1>
      <h1>Query - {query}</h1>
    </div>
  );
};

export default QueryDetails;
