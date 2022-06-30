import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostService from "../services/PostService";
function AddPost() {

const history= useHistory();
const {id} = useParams()
  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   if(id){
      await PostService.edit(id, newPost)
   }
   else
   { await PostService.add(newPost);}
    
    history.push("/posts");
  };

  const handleReset = () => {
      setNewPost({
        title:"",
        text:""
      });
  }

  
 

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
        <br></br>
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
        <button>{id ? 'Edit' : 'Add post'}</button>
        <button type="button"  onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
export default AddPost;