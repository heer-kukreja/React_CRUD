import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Hesper');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log("New Chaotic Event Created!");
                setIsPending(false);
                //history.go(-1);
                history.push('/');
            })
        }, 1000);
    }


    return (
        <div>
            <div className="create">
                <h2>Add Chaos to the Calm</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog Title</label>
                    <input
                     type="text" 
                     required
                     value={ title }
                     onChange={ (e) => setTitle(e.target.value) }
                    />
                    <label>Blog Body</label>
                    <textarea 
                        required
                        value={ body }
                        onChange={ (e) => setBody(e.target.value) }
                    ></textarea>
                    <label>Author</label>
                    <select
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value) }
                    >
                        <option value="Hesper">Hesper</option>
                        <option value="Vante">Vante</option>
                    </select>
                    {!isPending && <button>Create</button> }
                    {isPending && <button disabled>Creating Chaos</button> }
                </form>
            </div>
        </div>
    )
}

export default Create
