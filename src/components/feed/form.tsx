import { useState } from 'react';
import { Button } from '../shared';
import axios from 'axios';

const Form = () => {
  const [query, setQuery] = useState<string>('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      query: query,
      createdBy: 'Shivam Shekhar',
    };
    console.log(data);

    axios
      .post('http://localhost:3001/query', data)
      .then((res) => {
        console.log(res);
        alert('Query submitted successfully');
      })
      .catch((err) => {
        console.log(err);
        alert('Error submitting query');
      });
  };

  return (
    <div>
      <div className=" m-auto max-w-xl">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="query">
              Query
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="query"
              type="text"
              placeholder="Post your query here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="primary">
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
