

function toSignup(){
  window.location.href = "http://localhost:5500/signup.html"
}

async function checkCredentials(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log("user: ", username)
    console.log("pass: ", username)

    console.log("sending...: ", username, password)
    const user = {username:username, password:password}
    console.log(user)
    await fetch(`http://localhost:8000/Login/`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if(json.message == "Success"){
          console.log("Validated")
          alert("You have successfully signed in!!!")
          window.location.href = "http://localhost:5500/homepage.html";
        }
        else{
          alert("There was an issue with your credentials")
        }
      })
      
  }