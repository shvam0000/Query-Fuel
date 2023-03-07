import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QueryItem from './query-item';
import axios from 'axios';

const QueryList = () => {
  const [queries, setQueries] = useState<any>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/query')
      .then((res) => {
        console.log(res.data.queries);
        setQueries(res.data.queries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/feed/query/1');
  };

  return (
    <div
      onClick={showDetailHandler}
      className="justify-center items-center text-xl font-bold border-2 border-primary-black py-10 m-5">
      {queries.map((query: any) => (
        <QueryItem
          key={query._id}
          query={query.query}
          id={query._id}
          createdBy={query.createdBy}
        />
      ))}
    </div>
  );
};

export default QueryList;

//! TODO:
//! schema - id, query, createdAt, comments
//! get the query list from the database
//! display the query list
// when a query is clicked, navigate to the query detail page
// get a comment form and display the comments
// when a comment is submitted, add it to the database
// when a comment is submitted, display it on the page
// when a comment is submitted, navigate to the query detail page
