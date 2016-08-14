const loginPage = "index.html";


if(localStorage.signedIn != "hr" || localStorage.signedIn == undefined)
{
	window.location.href = loginPage;
}

function employee(firstName, lastName, age, eid, epass, remarks){
	this.firstName = firstName;
	this.lastName  = lastName;
	this.age   = age;
	this.eid   = eid;
	this.epass = epass;
	this.remarks = remarks;
}

var eArray = new Array();

var logout = function(){
	localStorage.signedIn == false;
	window.location.href = loginPage;
}

var displayViewBlock = function(){
	document.getElementById('viewBlock').style.display = "block";
	document.getElementById('AddEmployeeBlock').style.display = "none";
	document.getElementById('remark_block').style.display = "none";
	document.getElementById('eCount').innerHTML = localStorage.length-2;	
}

var getEmployeeIndex = function(){
	var searchId = document.getElementById('searchId').value;
	l = localStorage.length-2;
	var objKey = "";
	var found = false;
	var index = 0;
	for(i=0;i<l;i++)
	{
		objKey = "eObject"+i;
		var myObject = JSON.parse(localStorage.getItem(objKey));
		if(myObject.eid == searchId)
		{
			alert("Employee Found");
			found = true;
			index = i;

			document.getElementById('dispFirst').innerHTML = myObject.firstName;
			document.getElementById('dispLast').innerHTML = myObject.lastName;
			document.getElementById('dispAge').innerHTML = myObject.age;
			document.getElementById('dispFound').style.display = "block";

			break;
		}
	}

	if(!found)
		{
			alert("Not there");
		}
}

var displayAddEmployeeBlock = function(){
	document.getElementById('viewBlock').style.display = "none";
	document.getElementById('AddEmployeeBlock').style.display = "block";
	document.getElementById('remark_block').style.display = "none";
}

var displayAddRemarksBlock = function(){
	document.getElementById('viewBlock').style.display = "none";
	document.getElementById('AddEmployeeBlock').style.display = "none";
	document.getElementById('remark_block').style.display = "block";
}

var regEmployee = function(){
	eFirst = document.getElementById('eFirst').value;
	eLast = document.getElementById('eLast').value;
	eAge = document.getElementById('eAge').value;
	eId = document.getElementById('eId').value;
	ePass = document.getElementById('ePass').value;

	eObj = new employee(eFirst, eLast, eAge, eId, ePass, "");
	eArray.push(eObj);
	var l = localStorage.length-2;
	eKey = "eObject" + l;
	localStorage.setItem(eKey, JSON.stringify(eObj));
	alert("Successfully Registered")
}

var rindex=0;
var putRemarks = function(){

	var searchId = document.getElementById('rSearch').value;
	l = localStorage.length - 2;
	var objKey = "";
	var found = false;
	for(i=0;i<l;i++)
	{
		objKey = "eObject"+i;
		var myObject = JSON.parse(localStorage.getItem(objKey));

		if(searchId == myObject.eid){
			rindex = i;
			found = true;
			alert("employee found and selected");
		}
	}

	if(!found)
		{
			alert("Employee Not there");
		}
}

var submitRemark = function(){
	var remark = document.getElementById('remarkField').value;

	objKey = "eObject"+rindex;
	var myObject = JSON.parse(localStorage.getItem(objKey));
	myObject.remarks = remark;
	localStorage.setItem(objKey, JSON.stringify(myObject));
	alert("Successfully Submitted");
}