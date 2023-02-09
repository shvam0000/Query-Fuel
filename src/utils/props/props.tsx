export type LayoutProps = {
  children: JSX.Element;
};

export type ButtonProps = {
  children: JSX.Element;
  type: 'primary' | 'secondary';
  handleClick?: () => void;
};

export type AnnouncementCardProps = {
  title: string;
  announcement: string;
  nickname: string;
  imageUrl: string | 'https://i1.wp.com/cdn.auth0.com/avatars/ss.png?ssl=1';
  date?: string;
};
