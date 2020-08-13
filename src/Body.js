import React, { useState} from 'react';
import './App.css';
import Fuse from 'fuse.js';
import Data from './posts';

function Body() {
        const [query, setQuery] = useState('');

        const fuse = new Fuse(Data, {
            keys: [
                'userId',
                'id',
                'title',
                'body'
            ],
            includeScore: true
        })

        const results = fuse.search(query);
        const postResults = query ? results.map(result => result.item) : Data;
        //console.log('results',results)
        function handleOnSearch({ currentTarget = {} }) {
            const { value } = currentTarget;
            setQuery(value);
        }
  
        return (
        
            <div className="posts">
                <form className="search">
                    <label>Search</label>
                    <input type="text" placeholder="User Id, Post Id, Title or Body" value={query} onChange={handleOnSearch} />
                </form>
                <hr></hr>
                { postResults.map(post => {
                return (
                    <div className="container" class="container">
                        <div className="card" class="card">
                            <h4 key={1}>User Id:{ post.userId }</h4>
                            <h4 key={2}>Post Id:{ post.id }</h4>
                            <h3 key={3}>Title: { post.title }</h3>
                            <p key={4}>{ post.body }</p>
                        </div>
                    </div>
                )
                    }) }
                   
            </div>
        );

    }


export default Body;
