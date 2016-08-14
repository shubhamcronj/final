if(localStorage.signedIn != "emp" || localStorage.signedIn == undefined){
	window.location.href = 'index.html';
}

var logout = function(){
	localStorage.signedIn == false;
	window.location.href = 'index.html';
}

var showProfile = function()
{
	eindex = localStorage.eLog;
	document.getElementById('employeeProfileBlock').style.display = "block";
	objKey = "eObject"+eindex;
	var myObject = JSON.parse(localStorage.getItem(objKey));
	document.getElementById('firstName').innerHTML = myObject.firstName;
	document.getElementById('lastName').innerHTML = myObject.lastName;
	document.getElementById('age').innerHTML = myObject.age;
	document.getElementById('remarks').innerHTML = myObject.remarks;
}