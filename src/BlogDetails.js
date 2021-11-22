import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';  


function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`); 
    const history = useHistory(); 

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div>
            <div className="blog-details">
                { isLoading && <div>Loading...</div> }
                { error && <div>{ error.message }</div> }
                { blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Written By: { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={handleClick}>Delete</button>
                    </article>
                )}
            </div>
        </div>
    )
}

export default BlogDetails
