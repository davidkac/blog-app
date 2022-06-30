import React, {useState,useEffect} from 'react';
import SinglePost from '../components/SinglePost';
import PostService from '../services/PostService';


function AppPosts() {

    const [posts,setPosts] = useState([]);


    useEffect(() => {
        const fetchPost = async () => {
        const data = await PostService.getAll();

        setPosts(data);
    };
     fetchPost();
    },[]);



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
             
                />
            ))}
        </ul>
        
      </div>
    )
   
}

export default AppPosts;