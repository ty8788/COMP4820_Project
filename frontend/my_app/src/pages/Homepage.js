import React, { useState } from 'react';
import './Homepage.css';

const CommentCard = () => {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddComment = () => {
    if (inputValue.trim() !== '') {
      setComments([...comments, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Comments</h5>
        <p className="card-text">
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
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">Lamebook</a>
          <div className="form-inline my-2 my-lg-0">
            <img src="" className="profile_image" alt="Profile" />
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-between m-5">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </>
  );
};

export default Homepage;
