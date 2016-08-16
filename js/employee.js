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
	element = document.getElementById('remarks').innerHTML="";
	objKey = "eObject"+eindex;
	var myObject = JSON.parse(localStorage.getItem(objKey));
	document.getElementById('firstName').innerHTML = myObject.firstName;
	document.getElementById('lastName').innerHTML = myObject.lastName;
	document.getElementById('age').innerHTML = myObject.age;
	
	var element = document.getElementById('remarks');
	for(i=0;i<myObject.remarks.length;i++){
		console.log(myObject.remarks[i]);
	var para = document.createElement('p');
	var node = document.createTextNode("Remark "+ i +" : "+myObject.remarks[i]);
	para.appendChild(node);
	element.appendChild(para);
}
}