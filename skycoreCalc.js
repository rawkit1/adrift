var dict = {'aluminum':.26,'copper':.50,'silver':.55,'gold':.69};

window.onload=function(){
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	var casing = document.getElementById('casing').options[e.selectedIndex];
	var gen = document.getElementById('generator').options[e.selectedIndex];
}



function updateSpeed(){
  document.getElementById('mass').value = casing.value*100+dict[gen.value]*40;
	document.getElementById('output').value = "Speed: " + 50 * Math.sqrt(2 * power.value / mass.value).toFixed(3) + " knots";
			}
