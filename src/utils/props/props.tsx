export type LayoutProps = {
  children: JSX.Element;
};

export type ButtonProps = {
  children?: JSX.Element;
  type?: 'primary' | 'secondary';
  handleClick?: () => void;
};
