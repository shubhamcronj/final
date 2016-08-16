// declaring hr userid and password
const hrUsername = "cronj";
const hrPassword = "hr";

const EMPTY = "";

localStorage.setItem("signedIn", false);
localStorage.setItem("eLog", 0);

function authenticate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(!username && !password)
	{
		document.getElementById("errorMessage").innerHTML = "Please enter Username and Password";
		document.getElementById("errorMessageBlock").style.display = "block";
		hide("errorMessageBlock",3);
		return false;
	}
	else if(!password)
	{
		document.getElementById("errorMessage").innerHTML = "Please enter Password";
		document.getElementById("errorMessageBlock").style.display = "block";
		document.getElementById("password").value = EMPTY;
		hide("errorMessageBlock",3);
		return false;
	}
	else if(!username)
	{
		document.getElementById("errorMessage").innerHTML = "Please enter Username";
		document.getElementById("errorMessageBlock").style.display = "block";
		document.getElementById("password").value = EMPTY;
		hide("errorMessageBlock",3);
		return false;
	}

	else
	{
	var l = localStorage.length - 2;

	if(username == hrUsername && password == hrPassword)
	{
		window.location.href = 'hr.html';
		localStorage.setItem("signedIn", "hr");
		return false;
	}

	else if(true){
		var flag = false, index = 0;
		for(i=0;i<l;i++)
		{
			objKey = "eObject"+i;
			var myObject = JSON.parse(localStorage.getItem(objKey));
			if(myObject.eid == username && myObject.epass == password)
			{
				flag =true;
				window.location.href = 'employee.html';
				localStorage.setItem("signedIn", "emp");
				localStorage.setItem("eLog", i);
				return false;
				break;
			}
		}
		if(!flag)
		{
			document.getElementById("errorMessage").innerHTML = "Wrong Credentials";
			document.getElementById("errorMessageBlock").style.display = "block";
			document.getElementById("password").value = EMPTY;
			hide("errorMessageBlock",3);
			return false;
		}
	}
}
return false;
}
