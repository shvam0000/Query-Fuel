import { AnnouncementCardProps } from '@/utils/props/props';

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  announcement,
  nickname,
  date,
}) => {
  return (
    <div>
      <div className="bg-gray-600 w-3/4 m-auto my-10 rounded-lg">
        <div className="flex px-3 py-2">
          <div>
            <h2 className="text-2xl font-bold text-primary-white">{title}</h2>
            <h1 className="text-gray-300">
              Announcement by - <span className="font-bold">{nickname}</span>
            </h1>
          </div>
        </div>
        <p className="bg-primary-orange text-primary-white text-xl font-bold p-10 text-justify rounded-b-lg">
          {announcement}
        </p>
        <div className="text-primary-white p-2">{date}</div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
