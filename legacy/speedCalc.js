window.onload=function(){
	document.getElementById('mass').addEventListener("keyup", updateSpeed);
	document.getElementById('power').addEventListener("keyup", updateSpeed);
	var mass = document.getElementById('mass');
	var power = document.getElementById('power');
}



function updateSpeed(){
	document.getElementById('output').value = "Speed: " + 50 * Math.sqrt(2 * power.value / mass.value).toFixed(3) + " knots";
			}