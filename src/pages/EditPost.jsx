import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();

  return <h2>Edit Post ID: {id}</h2>;
}

export default EditPost;