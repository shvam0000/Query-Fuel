import axios from 'axios';
import { useEffect, useState } from 'react';
import { AnnouncementCard, AnnouncementForm } from './';
import { lastLoginDate } from '@/utils/helpers/date';

const Hero = () => {
  const [announcements, setAnnouncements] = useState<any>();

  useEffect(() => {
    axios
      .get('http://localhost:3001/announcement')
      .then((res) => {
        setAnnouncements(res.data.announcements);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AnnouncementForm />
      <div className="p-10">
        {announcements?.map((announcement: any) => (
          <AnnouncementCard
            key={announcement._id}
            title={announcement.title}
            announcement={announcement.announcement}
            nickname={announcement.nickName}
            date={lastLoginDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
