
// handle text box input. Collect and send to database

async function getInput(){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (name === '' || email === '' || password === ''|| username ==='') {
        alert('enter all values');
    }
    else{
      const newUser = {name, email, password, username};
      await fetch(`http://localhost:8000/Register`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((json) => {
          if(json.message == "Success"){
            console.log("Registered")
            alert("You have successfully registered!")
            window.location.href = "http://localhost:5500/login.html"
          }
          else{
            alert("There was an issue with your credentials")
          }

        })
      .catch(error => {
        window.alert(error);
        return
      });
    }
}
