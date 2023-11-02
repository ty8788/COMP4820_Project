import React, {useState} from 'react';
import './Homepage.css'
const Homepage = () => {

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
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Lamebook</a>
        <div className="form-inline my-2 my-lg-0">
        <img src=""  className='profile_image'></img>
        </div>
      </div>
    </nav>
    <div className='d-flex justify-content-between m-5'>
    <div class="card" style={{ width: "18rem" }}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <p class="card-text"> {comments.map((comment, index) => (
                <span key={index}>
                  {comment}
                  {index < comments.length - 1 ? ' ' : ''}
                </span>
              ))}</p>
      <input type="text" name="comment" id="add_comment" value={inputValue} onChange={handleInputChange}/>
      <button className='mt-2' onClick={handleAddComment}>Add Comment</button>
    </div>
  </div>
  <div class="card" style={{ width: "18rem" }}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <p class="card-text">{comments.map((comment, index) => (
                <span key={index}>
                  {comment}
                  {index < comments.length - 1 ? ' ' : ''}
                </span>
              ))}</p>
      <input type="text" name="comment" id="add_comment" value={inputValue} onChange={handleInputChange}/>
      <button className='mt-2' onClick={handleAddComment}>Add Comment</button>
    </div>
  </div>
  <div class="card" style={{ width: "18rem" }}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <p class="card-text">{comments.map((comment, index) => (
                <span key={index}>
                  {comment}
                  {index < comments.length - 1 ? ' ' : ''}
                </span>
              ))}</p>
     <input type="text" name="comment" id="add_comment" value={inputValue} onChange={handleInputChange}/>
     <button className='mt-2' onClick={handleAddComment}>Add Comment</button>
    </div>
  </div>
  
  </div>
  </>
  );
};

export default Homepage;
