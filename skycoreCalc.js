var gen;
var casing;
var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69,'n/a':0};

window.onload  = function() {
	
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	casing = document.getElementById('casing').value;
	gen = document.getElementById('generator').value;
}


function updateSpeed(){
  console.log(dict);
  document.getElementById('mass').value = casing*100+dict[gen]*40;
}
