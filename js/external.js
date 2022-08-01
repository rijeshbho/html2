var a=1;
var b=2;
var c=a+b;
function getDate() {
	var date = new Date();
	var par = document.getElementById("current_date");
	console.log(par)
	 par.innerHTML= date;
	 par.style.color="white";
}
function getEmail(){
	var email=document.getElementById("email").value;
	var name=document.getElementById("username").value;
	var password=document.getElementById("Password").value;
	var role=document.getElementById("role").value;
	document.getElementById("Email").innerHTML= "your email is" +email
}
