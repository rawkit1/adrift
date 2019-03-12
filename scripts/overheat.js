var power = 0;
var oh = 0;
var cf = 0;
window.onload = function() {
	console.log('overheat.js loaded');
    document.getElementById('overheatPower').addEventListener("keyup", updateOverheat);
    document.getElementById('overheatLimit').addEventListener("keyup", updateOverheat);
    document.getElementById('overheatCool').addEventListener("keyup", updateOverheat);
    power = document.getElementById('overheatPower');
    oh = document.getElementById('overheatLimit');
    cf = document.getElementById('overheatCool');
    console.log('overheat.js initialized');
}

var overheat = 0.0;
var k = 0.0;
var A = 0.0;

function updateOverheat() {
	k = 0.001596178271201 * cf.value**0.520 * oh.value**0.250 / power.value**0.335;
	A = 0.685471929061446 * power.value**1.479 / oh.value**1.118;
    overheat = Math.log(A/(A-500 * k))/k;
    if (A/(A-500 * k) < 0) {
    	document.getElementById('overheatOut').value = "This engine will never overheat!";
    }
    else {
    	document.getElementById('overheatOut').value = "This engine will oveheat after " + overheat.toFixed(0) + " seconds.";
    }
}