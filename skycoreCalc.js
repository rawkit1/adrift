var gen;
var casing;
var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69,'n/a':0};

window.onload  = function() {
	
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	var casingObj = document.getElementById('casing');
	casing = casingObj.selectedOptions[0];
	var genObj = document.getElementById('generator');
	gen = genObj.selectedOptions[0];
	
}


function updateSpeed(){
  console.log(dict);
  document.getElementById('mass').value = casing.value*100+dict[gen.value]*40;
}
