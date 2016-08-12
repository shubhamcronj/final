// declaring hr userid and password
var hr_id = "cronj";
var hr_pass = "hr";
localStorage.setItem("auth", false);
localStorage.setItem("eLog", 0);
// authentication function
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
/*else if(true){
		var flag = false, index = 0;
		for(i=0;i<emArr.length;i++)
		{	
			document.getElementById('ereg').style.display="none";
			if(uname.value == emArr[i].eid && upass.value == emArr[i].epass)
			{
			document.getElementById('greet').innerHTML = "Hi! " + emArr[i].first;
			flag = true;
			index = i;
			}
			if(flag)
			{
				document.getElementById('emp_block').style.display = "block";
				document.getElementById('efirst').innerHTML = "First Name: "+ emArr[index].first;
				document.getElementById('elast').innerHTML = "Last Name : " + emArr[index].last;
				document.getElementById('eage').innerHTML = "Age : " + emArr[index].age;
			}
		}
*/