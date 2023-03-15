import { CommentItemProps } from '@/utils/props/props';

const CommentItem: React.FC<CommentItemProps> = ({ comment, createdBy }) => {
  return (
    <div>
      <h1>Created By = {createdBy}</h1>
      <h1>Comment = {comment}</h1>
    </div>
  );
};

export default CommentItem;
