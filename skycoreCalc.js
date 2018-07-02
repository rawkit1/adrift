var gen;
var dict;

window.onload  = function() {
	
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	var casingObj = document.getElementById('casing');
	casing = casingObj.options[casingObj.selectedIndex];
	var genObj = document.getElementById('generator');
	gen = casingObj.options[casingObj.selectedIndex];
	dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69};
}


function updateSpeed(){
  console.log(casing.value.toString());
  console.log(gen.value.toString())
  console.log(dict[gen.value].toString())
  document.getElementById('mass').value = casing.value*100+dict[gen.value]*40;
}
