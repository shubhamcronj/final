const emptyColor = "red";
const filledColor = "green";

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
		document.getElementById(element).style.display = "none";
	  }, time*1000);
}