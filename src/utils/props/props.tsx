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
  date?: string;
};

export type InnovationCardProps = {
  img?: JSX.Element;
  title?: string;
  description?: string;
};

export type TeamCardProps = {
  url?: string;
  subtitle?: string;
  name?: string;
  github?: string;
  linkedin?: string;
};

export type QueryItemProps = {
  id: string;
  query: string;
  createdBy: string;
};

export type CommentItemProps = {
  comment?: string;
  createdBy: string;
};
