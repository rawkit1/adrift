var gen;
var casing;
var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69,'n/a':0};

window.onload  = function() {
	
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
}


function updateSpeed(){
  gen = document.getElementById('generator').value;
  casing = document.getElementById('casing').value;
  document.getElementById('mass').value = "Weight: " + casing*100+dict[gen]*40 + "kg";
}
