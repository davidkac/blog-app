import React from 'react';
import {Link} from 'react-router-dom';


function SinglePost({
    id,title,text
}) {
    return (            
        <li>
            title: {title}
            text: {text}
            <Link to={"post/:id"}>View Post</Link>
        </li>
    );
}


export default SinglePost;