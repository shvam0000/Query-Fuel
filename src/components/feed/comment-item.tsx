import { CommentItemProps } from '@/utils/props/props';

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div>
      <h1>Comment = {comment}</h1>
    </div>
  );
};

export default CommentItem;
