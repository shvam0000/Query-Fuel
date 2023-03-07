import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QueryItem from './query-item';
import axios from 'axios';

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
          onClick={() => router.push('/feed/query/' + query._id)}
          className="justify-center items-center text-xl font-bold border-2 border-primary-black py-10 m-5">
          <QueryItem
            query={query.query}
            id={query._id}
            createdBy={query.createdBy}
          />
        </div>
      ))}
    </div>
  );
};

export default QueryList;

//! TODO:
//! schema - id, query, createdAt, comments
//! get the query list from the database
//! display the query list
//! when a query is clicked, navigate to the query detail page
// get a comment form and display the comments
// when a comment is submitted, add it to the database
// when a comment is submitted, display it on the page
// when a comment is submitted, navigate to the query detail page
