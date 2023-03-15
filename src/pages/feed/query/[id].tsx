import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/shared';
import { CommentItem } from '@/components/feed';

const QueryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [createdBy, setCreatedBy] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [temp, setTemp] = useState<any>('');
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/query/' + id)
      .then((res) => {
        console.log(res.data.query);
        setCreatedBy(res.data.query.createdBy);
        setQuery(res.data.query.query);
        setComments(res.data.query.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const commentSubmitHandler = () => {
    const data = {
      query: query,
      createdBy: createdBy,
      comments: [{ comment: temp, createdBy: 'ankit' }],
    };
    axios('http://localhost:3001/query/' + id, {
      method: 'PATCH',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.data);
        setComments(res.data.query.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex-row justify-center items-center text-center font-medium text-2xl">
        <h1>
          <span className="font-bold">Created by</span> - {createdBy}
        </h1>
        <h1>
          <span className="font-bold">Query</span> - {query}
        </h1>
      </div>

      <div className="max-w-lg mx-auto my-10 shadow-xl border-2">
        <form onSubmit={commentSubmitHandler} className="w-full mx-auto p-4">
          <label className="block mb-2">
            <span className="text-gray-600">Add a comment</span>
            <textarea
              value={temp}
              onChange={(e) => {
                setTemp(e.target.value);
              }}
              className="block w-full mt-1 rounded"
              required
              rows={3}></textarea>
          </label>
          <Button type="primary">
            <h1>Comment</h1>
          </Button>
        </form>
      </div>

      {comments.map((comment: any) => (
        <div
          key={comment._id}
          className="flex justify-center items-center bg-blue-200 w-1/4 m-auto rounded-xl py-10">
          <CommentItem
            createdBy={comment.createdBy}
            comment={comment.comment}
          />
        </div>
      ))}
    </div>
  );
};

export default QueryDetails;
