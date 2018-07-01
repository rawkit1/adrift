window.onload=function(){
	document.getElementById('fe').addEventListener("keyup", updateSpeed);
	document.getElementById('num').addEventListener("keyup", updateSpeed);
	var fe = document.getElementById('fe');
	var num = document.getElementById('num');
}

var eff = 0;

function updateSpeed(){
	eff = 1.139 * Math.pow(fe.value, -.9805) * num.value * 60
	document.getElementById('output').value = "Fuel consumption: " + eff.toFixed(2) + " per minute";
			}