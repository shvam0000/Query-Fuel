import { useEffect, useState } from 'react';
import { Button } from '../shared';
import axios from 'axios';
import { lastLoginDate } from '../../utils/helpers/date';
import { useUser } from '@auth0/nextjs-auth0/client';

const AnnouncementForm = () => {
  const [title, setTitle] = useState<string>('');
  const [announcement, setAnnouncement] = useState<string>('');
  const [nickName, setNickName] = useState<any>();
  const [imageUrl, setImageUrl] = useState<any>();

  const { user, error, isLoading } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: title,
      announcement: announcement,
      nickName: user?.nickname,
      imageUrl: user?.picture,
    };
    axios
      .post('http://localhost:3001/announcement', data)
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
      <div className=" m-auto max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
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

export default AnnouncementForm;
