import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { QueryItem } from './';
import axios from 'axios';
import { Button } from '../shared';

const QueryList = () => {
  const router = useRouter();
  const [queries, setQueries] = useState<any>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/query')
      .then((res) => {
        setQueries(res.data.queries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {queries.map((query: any) => (
        <div
          key={query._id}
          className="w-2/3 mx-auto text-left px-10 rounded-2xl bg-slate-100 text-xl font-medium py-10 m-5 cursor-pointer">
          <div>
            <QueryItem
              query={query.query}
              id={query._id}
              createdBy={query.createdBy}
            />
            <Button
              handleClick={() => router.push('/feed/query/' + query._id)}
              type="primary">
              <h1>Show Details</h1>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QueryList;
