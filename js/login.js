// declaring hr userid and password



var hr_id = "cronj";
var hr_pass = "hr";

localStorage.setItem("auth", false);
localStorage.setItem("eLog", 0);
// authentication function

var validateUser = function(){
	
	var uname = document.getElementById('id');
	
	if(!uname.value)
	{
		uname.style.borderColor="red";
	}
	else
	{
		uname.style.borderColor="green";
	}

	
}

var validatePass = function(){
	
	var upass = document.getElementById('pass');
	if(!upass.value)
	{
		upass.style.borderColor="red";
	}
	else
	{
		upass.style.borderColor="green";
	}
}

function authenticate()
{
	var id = document.getElementById("id").value;
	var pass = document.getElementById("pass").value;
	var l = localStorage.length - 2;

	if(id == hr_id && pass == hr_pass)
	{
		window.location.href = 'hr.html';
		localStorage.setItem("auth", "hr");
	}

	else if(true){
		var flag = false, index = 0;
		for(i=0;i<l;i++)
		{
			objKey = "eObject"+i;
			var myObject = JSON.parse(localStorage.getItem(objKey));
			if(myObject.eid == id && myObject.epass == pass)
			{
				flag =true;
				window.location.href = 'employee.html';
				localStorage.setItem("auth", "emp");
				localStorage.setItem("eLog", i);
				break;
			}
		}
		if(!flag)
		{
			alert("Wrong Credentials");
		}
	}

	else
	{
		alert("Wrong Credentials");
	}
}