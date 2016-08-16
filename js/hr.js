const loginPage = "index.html";
const EMPTY = "";

if(localStorage.signedIn != "hr" || localStorage.signedIn == undefined)
{
	window.location.href = loginPage;
}

var rem = new Array();

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
	document.getElementById('remarksBlock').style.display = "none";
	//document.getElementById('viewBlock').style.color = white;
	//document.getElementById('viewBlock').style.backgroundColor = "#009090";
	//document.getElementById('viewBlock').style.cursor = "pointer";

	//document.getElementById('employeeCount').innerHTML = localStorage.length-2;	
}

function generateSelectList(){
	document.getElementById('employeeBrowser').innerHTML = "";
	var searchId = document.getElementById('searchId').value;
	l = localStorage.length-2;
	var objKey = "";
	var found = false;
	var index = 0;
	for(i=0;i<l;i++)
	{
		objKey = "eObject"+i;
		var myObject = JSON.parse(localStorage.getItem(objKey));
		
			//alert("Employee Found");
			found = true;
			index = i;
			var para = document.createElement('option');
			para.setAttribute("value",myObject.eid);
			var element = document.getElementById('employeeBrowser');
			element.appendChild(para);
	}
}

var getEmployeeIndex = function(){		
	l = localStorage.length-2;
	var objKey = "";
	var found = false;
	var index = 0;
	for(i=0;i<l;i++)
	{		
			objKey = "eObject"+i;
			var myObject = JSON.parse(localStorage.getItem(objKey))
			if(myObject.eid == document.getElementById('searchId').value)
			{
			document.getElementById('dispFirst').innerHTML = myObject.firstName;
			document.getElementById('dispLast').innerHTML = myObject.lastName;
			document.getElementById('dispAge').innerHTML = myObject.age;
			document.getElementById('dispFound').style.display = "block";
			return false;
			break;
		}
	}
	return false;
}

var displayAddEmployeeBlock = function(){
	document.getElementById('viewBlock').style.display = "none";
	document.getElementById('AddEmployeeBlock').style.display = "block";
	document.getElementById('remarksBlock').style.display = "none";
}

var displayAddRemarkBlock = function(){
	document.getElementById('viewBlock').style.display = "none";
	document.getElementById('AddEmployeeBlock').style.display = "none";
	document.getElementById('remarksBlock').style.display = "block";
}

var regEmployee = function(){
	eFirst = document.getElementById('eFirst').value;
	eLast = document.getElementById('eLast').value;
	eAge = document.getElementById('eAge').value;
	eId = document.getElementById('eId').value;
	ePass = document.getElementById('ePass').value;

	var alreadyExist = false;
	var objKey = "";
	for(i=0;i<(localStorage.length - 2);i++)
	{	
		objKey = "eObject" + i ;
		myObject = JSON.parse(localStorage.getItem(objKey));
		if(myObject.eid == eId)
		{
			message("Employee with this username already exists");
			return false;
			break;
		}
	}

	if(!eFirst || !eLast || !eAge || !eId || !ePass)
	{
		message("Fill all the details");
		return false;
	}
	else
	{
	eObj = new employee(eFirst, eLast, eAge, eId, ePass, rem);
	eArray.push(eObj);
	var l = localStorage.length-2;
	eKey = "eObject" + l;
	localStorage.setItem(eKey, JSON.stringify(eObj));
	message("Successfully Registered");
	document.getElementById('eFirst').value = EMPTY;
	document.getElementById('eLast').value = EMPTY;
	document.getElementById('eAge').value = EMPTY;
	document.getElementById('eId').value = EMPTY;
	document.getElementById('ePass').value = EMPTY;

	return false;
}
}

function submitRemark(){

	var remark = document.getElementById('remarkField').value;
	var selectValue = document.getElementById('rsearchId').value;
	var l = localStorage.length-2;
	objKey = "";
	for(i=0;i<l;i++)
	{	
		objKey = "eObject"+i;
		var myObject = JSON.parse(localStorage.getItem(objKey));
		if(myObject.eid == selectValue)
		{
			myObject.remarks.push(remark);
			localStorage.setItem(objKey, JSON.stringify(myObject));
			message("Submitted");
		}
	}
	return false;
}



function message(msgText){
	document.getElementById("errorMessage").innerHTML = msgText;
	document.getElementById("errorMessageBlock").style.display = "block";
	hide("errorMessageBlock",3);
}