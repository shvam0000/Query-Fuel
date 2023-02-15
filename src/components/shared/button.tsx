import { ButtonProps } from '@/utils/props/props';

const Button: React.FC<ButtonProps> = ({ type, handleClick, children }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`text-md px-4 py-2 font-bold rounded-full w-fit cursor-pointer hover:scale-110 ${
        type === 'primary'
          ? 'bg-primary-orange text-gray-100'
          : 'bg-white border border-gray-300 text-black'
      }`}>
      {children}
    </button>
  );
};
export default Button;
