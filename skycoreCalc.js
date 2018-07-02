window.onload  = function() {
	alert("Hello! I am an alert box!!");
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	var dict = {'aluminum':.26,'copper':.50,'silver':.55,'gold':.69};
	var casing = document.getElementById('casing').options[e.selectedIndex];
	var gen = document.getElementById('generator').options[e.selectedIndex];
	
}



function updateSpeed(){
  document.getElementById('mass').value = casing.value*100+dict[gen.value]*40;
			}
