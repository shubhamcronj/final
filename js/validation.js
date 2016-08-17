const emptyColor = "red";
const filledColor = "green";

const EMPTY="";
const NONE="none";
const BLOCK="block";

function checkIfFilled(elementId){
	
	var element = document.getElementById(elementId);
	
	if(!element.value)
	{
		element.style.borderColor=emptyColor;
	}
	else
	{
		element.style.borderColor=filledColor;
	}
}
function hide(element, time){
	setTimeout(function(){
		document.getElementById(element).style.display = NONE;
	  }, time*1000);
}