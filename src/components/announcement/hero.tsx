import React from 'react';
import { Button } from '../shared';

const Hero = () => {
  return (
    <div>
      <div className=" m-auto max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title of announcement"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="announcement">
              Announcement
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="announcement"
              placeholder="Announcement"
              rows={3}
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

export default Hero;
