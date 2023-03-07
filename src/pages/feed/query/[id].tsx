import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/shared';
import { CommentItem, CommentList } from '@/components/feed';

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
        console.log(res.data.query.createdBy);
        setCreatedBy(res.data.query.createdBy);
        setQuery(res.data.query.query);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/query/' + id + '/comments')
      .then((res) => {
        console.log(res.data.comments);
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const commentSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = [];
    comment.push(temp);
    const data = {
      comment: comment,
      createdBy: 'Sarthak',
    };
    axios
      .post(`http://localhost:3001/query/${id}/comments`, data)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Created by - {createdBy}</h1>
      <h1>Query - {query}</h1>

      <div className="max-w-lg shadow-xl border-2">
        <form onSubmit={commentSubmitHandler} className="w-full p-4">
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
        <CommentItem
          key={comment._id}
          id={comment._id}
          comment={comment.comment}
          createdBy={comment.createdBy}
        />
      ))}
    </div>
  );
};

export default QueryDetails;
