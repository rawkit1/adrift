window.onload  = function() {
	
	document.getElementById('casing').addEventListener("click", updateSpeed);
	document.getElementById('generator').addEventListener("click", updateSpeed);
	var casing = document.getElementById('casing').options[e.selectedIndex];
	var gen = document.getElementById('generator').options[e.selectedIndex];
	//var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69};
	var genWeight = 0;
	
}


function updateSpeed(){
  if (casing.value == 'aluminum') {
	  genWeight = .26;
  }
  else if (casing.value == 'copper') {
	  genWeight = .50;
  }
  else if (casing.value == 'silver') {
	  genWeight = .55;
  }
  else if (casing.value == 'gold') {
	  genWeight = .69;
  }
  else {
	  genWeight = 0;
  }
  else
  alert(genWeight.toString());
  document.getElementById('mass').value = casing.value*100+dict[gen.value]*40;
			}
