import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './posts';

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <hr></hr>
      <div className="posts">
        { Data.map(post => {
          return (
            <div class="container">
              <div class="card">
                <h4>User Id:{ post.userId }</h4>
                <h4>Post Id:{ post.id }</h4>
                <h3>Title: { post.title }</h3>
                <p>{ post.body }</p>
              </div>
            </div>
          )
      }) }
      </div>
    </div>
  );
}

export default App;
