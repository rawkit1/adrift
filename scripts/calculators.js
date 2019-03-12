var weight = 0;
var power = 0;
var inputTemplate = null;
var inputs = [];
var container = null;

window.onload = function() {
    document.getElementById('airspeedWeight').addEventListener("keyup", updateSpeed);
    document.getElementById('airspeedPower').addEventListener("keyup", updateSpeed);
    document.getElementById('overheatPower').addEventListener("keyup", updateOverheat);
    document.getElementById('overheatLimit').addEventListener("keyup", updateOverheat);
    document.getElementById('overheatCool').addEventListener("keyup", updateOverheat);
    power = document.getElementById('overheatPower');
    oh = document.getElementById('overheatLimit');
    cf = document.getElementById('overheatCool');
    weight = document.getElementById('airspeedWeight');
    power = document.getElementById('airspeedPower');
}

var speed = 0;

function updateSpeed() {
    speed = 50.0 * Math.sqrt(2.0 * (power.value / weight.value));
    document.getElementById('airspeedOut').value = "Airspeed: " + speed.toFixed(2) + " knots.";
}

function addInput() {
	container = document.getElementById('fuelInputs')
	inputs = document.getElementsByClassName('fuelInput');
	inputTemplate = document.createElement('input');
	inputTemplate.setAttribute('type', 'text');
	inputTemplate.setAttribute('class', 'w3-input fuelInput');
	inputTemplate.setAttribute('placeholder', 'Engine ' + (inputs.length + 1).toString() + ' fuel efficiency');
	container.appendChild(inputTemplate);
}

function resetInputs() {
	inputs = document.getElementsByClassName('fuelInput');
	while(inputs[0]) {
    	inputs[0].parentNode.removeChild(inputs[0]);
    }
}

var consumption = 0.0;

function updateFuel() {
	inputs = document.getElementsByClassName('fuelInput');
	consumption = 0.0;
	for (var i = 0; i < inputs.length; i++) {
    	consumption += 1.2 / inputs[i].value;
	}
	consumption *= 60;
    document.getElementById('fuelOut').value = "This ship uses " + consumption.toFixed(2) + " fuel per minute.";
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