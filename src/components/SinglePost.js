import React from 'react';
import {Link} from 'react-router-dom';


function SinglePost({
    id,title,text,editCallBack,handleDelete
}) {
    return (            
        <li>
            title: {title}
            <br></br>
            text: {text}
            <br></br>
            <Link to={"post/:id"}>View Post</Link>
            <button onClick={() => editCallBack(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>

        </li>
    );
}


export default SinglePost;