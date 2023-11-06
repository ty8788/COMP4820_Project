import React, { useState, useRef } from 'react';
import './Homepage.css';


const FirstCard = () => {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [user, getUser] = useState('');
  const ref = useRef()
  let username = (window.location.href).split("/")
  username = username[username.length - 1]

  function addComment(comment){
    var card = document.getElementById("comments")
    var text = document.createTextNode(comment)
    card.appendChild(text)
    card.appendChild(document.createTextNode("\n"))
  }
  // get the comments from the server
  async function getComments(){
    console.log("Fetching Comments")
    const response = await fetch(`http://localhost:8000/getComments/` + username);
    const comments = await response.json()
    console.log(comments)
    for(let i = 0; i < comments.length; i++){
      if(comments[i]){
        console.log(comments[i])
        addComment(comments[i])
      }
    }
  }
  
  const comm = document.getElementById("comments")
  
  getComments()
  
    
  return (    
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}'s Comments</h5>
        <p id='comments' className="card-text">
        </p>
        <input
          type="text"
          name="comment"
          id="add_comment"
          value={inputValue}
        />
      </div>
    </div>
  );
}


const CommentCard = () => {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [user, getUser] = useState('');
  const ref = useRef()
  

  let username = (window.location.href).split("/")
  username = username[username.length - 1]

  function addComment(comment){
    var card = document.getElementById("comments")
    var text = document.createTextNode(comment)
    card.appendChild(text)
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  // add a new comment to the page and send the comment to the server
  const handleAddComment = async () => {
    if (inputValue.trim() !== '') {
      setComments([...comments, inputValue]);
      setInputValue('');
      setComment(comments[comments.length-1])
      await fetch(`http://localhost:8000/getComments`, {
        method: "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({page: username, comment:comment, user:username})
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
    }
  };

  return (

    
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}'s Comments</h5>
        <p id = "comments" className="card-text">
          {comments.map((comment, index) => (
            <span key={index}>
              {comment}
              {index < comments.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
        <input
          type="text"
          name="comment"
          id="add_comment"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="mt-2" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

const Homepage = () => {
  let username = (window.location.href).split("/")
  username = username[username.length - 1]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">Lamebook - {username}'s' Page</a>
          <div className="form-inline my-2 my-lg-0">
            <img src="" className="profile_image" alt="Profile" />
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-between m-5">
        <FirstCard id = "first" />
        <CommentCard />
        <CommentCard />
      </div>
    </>
  );
};

export default Homepage;
