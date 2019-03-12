var inputTemplate = null;
var inputs = [];
var container = null;

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