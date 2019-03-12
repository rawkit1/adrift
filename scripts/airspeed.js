var weight = 0;
var power = 0;
window.onload = function() {
	console.log('airspeed.js loaded');
    document.getElementById('airspeedWeight').addEventListener("keyup", updateSpeed);
    document.getElementById('airspeedPower').addEventListener("keyup", updateSpeed);
    weight = document.getElementById('airspeedWeight');
    power = document.getElementById('airspeedPower');
    console.log('airspeed.js initialized');
}

var speed = 0;

function updateSpeed() {
    speed = 50.0 * Math.sqrt(2.0 * (power.value / weight.value));
    document.getElementById('airspeedOut').value = "Airspeed: " + speed.toFixed(2) + " knots.";
}