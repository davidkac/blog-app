import React, {useState,useEffect} from 'react';
import SinglePost from '../components/SinglePost';
import PostService from '../services/PostService';
import {useHistory} from 'react-router-dom';


function AppPosts() {

    const history = useHistory();

    const [posts,setPosts] = useState([]);


    useEffect(() => {
        const fetchPost = async () => {
        const data = await PostService.getAll();

        setPosts(data);
    };
     fetchPost();
    },[]);


    const handleEdit = (id) => {
        history.push(`edit/${id}`);
      };


      const handleDelete = async (Id) => {
        const response = prompt(
          "Are you sure you want to delete this car ?\n Enter 'Yes' if you are"
        );
    
        if (response !== 'Yes') {
          return;
        }
    
        const data = await PostService.delete(Id);
    
        if (data.count > 0) {
          setPosts(posts.filter(({ id }) => id !== Id));
        }
      };



    return (
        <div>
            <h2>Posts</h2>
       
        <ul>
            {posts.map((post) => (
                <SinglePost
                key={post.id}
                id={post.id}
                title={post.title}
                text={post.text}
                editCallBack={handleEdit}
                handleDelete={handleDelete}
             
                />
            ))}
        </ul>
        
      </div>
    )
   
}

export default AppPosts;