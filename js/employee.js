if(localStorage.auth != "emp" || localStorage.auth == undefined){
	window.location.href = 'index.html';
}

var logout = function(){
	localStorage.auth == false;
	window.location.href = 'index.html';
}

var view = function()
{
	eindex = localStorage.eLog;
	document.getElementById('empHtml').style.display = "block";
	objKey = "eObject"+eindex;
	var myObject = JSON.parse(localStorage.getItem(objKey));
	document.getElementById('eFirst').innerHTML = myObject.first;
	document.getElementById('eLast').innerHTML = myObject.last;
	document.getElementById('eAge').innerHTML = myObject.age;
	document.getElementById('eRemarks').innerHTML = myObject.remarks;
}