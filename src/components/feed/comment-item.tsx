import { CommentItemProps } from '@/utils/props/props';

const CommentItem: React.FC<CommentItemProps> = ({
  id,
  comment,
  createdBy,
}) => {
  return (
    <div>
      <h1>ID = {id}</h1>
      <h1>Comment = {comment}</h1>
      <h1>Created By = {createdBy}</h1>
    </div>
  );
};

export default CommentItem;
