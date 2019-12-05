/*function changeElement(){
	document.getElementById("demo").innerHTML = "Hello JS";	
}*/

/*
function bringTime(){
	document.getElementById("time").innerHTML = Date();
}*/

/*function validateForm(){
	var x = document.forms["myForm"]["name"].value;

	if(x==""){
		alert("Name must be filled out!");
		return false;
	}
}*/

/*pfunction demoRequest(){
	var request = new XMLHttpRequest();
	request.open('GET' , 'http://localhost:8080/workers/1', true);
	request.onreadystatechange = function(){
	if(this.readyState==4 && this.status==200){
		var worker = JSON.parse(this.responseText);
		document.getElementById("id").innerHTML = worker.id;
		document.getElementById("name").innerHTML = worker.name;
		document.getElementById("surname").innerHTML = worker.surname;
		document.getElementById("salary").innerHTML = worker.salary;
	}
};
request.send();
};*/


function demoSignup(){
	console.log("Function working!");
 

	var requestPost = new XMLHttpRequest();
	requestPost.open('POST' ,'http://localhost:8080/signup', true);
	requestPost.setRequestHeader('Content-Type', 'application/json');

	var email = document.getElementById("inputEmail").value;
	var pass = document.getElementById("inputPassword").value;
	var person ={ "email":"", "password":""} ;
	person.email=email;
	person.password=pass;
	console.log( JSON.stringify(person));	

	requestPost.send(JSON.stringify(person));
	alert("You have successfully signed up!");
}


function demoSignin(){
	console.log("Function working!");

	var email = document.getElementById("inputEmail").value;
	var pass = document.getElementById("inputPassword").value;
	var person ={ "email":"", "password":""} ;
	person.email=email;
	person.password=pass;
	
	//requestPost.send(JSON.stringify(person));

	var url ="http://localhost:8080/signin" ;
	fetch(url, {
		method: "POST",
		body: JSON.stringify(person),
		headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        }
		})
	.then(function(response){
	    return response.json();
	})
	.then(function(data){
	    console.log("data : "+data);
	    if(data==true){
	    	window.location = "/welcome.html";;
	    }else{
	    	alert("You are not in DB!");
	    }
	})
	.catch(function(error){
	console.log(error);
	});
}