
//render a comment to the DOM
function addComment(comment){
    const card = document.getElementById("db-cmt")
    var para = document.createElement("div")
    para.innerHTML = comment
    card.appendChild(para)
    
  }
function test(){
  console.log("hello world");
}
// get the comments from the server
async function getComments(){

    console.log("Fetching Comments")
    const response = await fetch(`http://localhost:8000/getComments`);
    const comments = await response.json()
    console.log(comments)
    for(let i = 0; i < comments.length; i++){
      if(comments[i] != null){
        addComment(comments[i])
      }
    }
  }

  async function postComment(){
    const cmt = document.getElementById("comment").value;
    console.log("CMT:", cmt);

    await fetch(`http://localhost:8000/getComments`, {
        method: "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({comment:cmt})
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      const card = document.getElementById("comments1")
      var para = document.createElement("div")
      para.innerHTML = cmt
      card.appendChild(para)
    }

document.getElementById("cmt").addEventListener("click", postComment())
document.getElementById("db-cmt").addEventListener("click", postComment())
console.log("listener added")

