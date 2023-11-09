import React, { useState, useRef } from 'react';
import './Homepage.css';

//Notes on the login page, registering an XSS attack and loading the page has thus far not worked, in the sense that the homepage for such accounts does not load
//I think a reflected attack could be done if homepages were handled similar to localhost:3000/user=test/ vs localhost:3000/test/ but thats a bit of a guess, don't quote me on it


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
    // Seems to put all comments into a single string, unsure if that is intentional
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
  
    // Directly putting the string value of the comments into dangerouslySetInnerHTML hasn't seen success
    // Neither have attempts to split the comments into individual comments and placing those values into dangerouslySetInnerHTML. Could be a skill issue on my part
    // Shouldn't matter if the comments are one string or several based on how the functional part of this code works
  return (    
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}'s Comments</h5>
        <p id='comments' className="card-text">
          <div dangerouslySetInnerHTML={{"__html": comments}} />
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
    if (true) {
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

  // Putting each comment into a dangerouslySetInnerHTML has had some effect? Not exactly what was intended but it gets some result
  // '<img src=""onerror="alert('XSS');"/>' causes an alert, <img onerror='alert("XSS");' src='invalid-image' /> causes an error
  // <script></script> commands don't appear on screen nor do they appear in the comment box, for which i have no explanation as normal comments appear in the comment box
  // Currently if multiple functional commands are given in a single comment, it executes each of them. It also will execute regardless of what else is included in the comment
  return (

    
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}'s Comments</h5>
        <p id = "comments" className="card-text">
          {comments.map((comment, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{"__html": comment}} />
              {index < comments.length - 1 ? ' ' : ''}
            </div>
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
