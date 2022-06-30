import { useState } from "react";
import { useHistory } from "react-router-dom";
import PostService from "../services/PostService";
const history = useHistory;
function AddPost() {

  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  const handleSubmit = async () => {
    await PostService.add(newPost);
    history.push("/posts");
  };
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          minLength="2"
          value={newPost.title}
          placeholder="Title"
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        <input
          type="text"
          required
          maxLength="300"
          value={newPost.text}
          placeholder="Text"
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        <button>Add Post</button>
      </form>
    </div>
  );
}
export default AddPost;