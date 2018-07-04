var gen;
var casing;
var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69,'n/a':0};
var dict2 = {'aluminum':6,'copper':7.5,'silver':8,'gold':8.5,'n/a':0};
var genQ;
var base = 1000;
var calc1;
var calc2;
var calc25;
var calc225;
window.onload  = function() {
  document.getElementById('casing').addEventListener("click", updateSpeed);
  document.getElementById('generator').addEventListener("click", updateSpeed);
  document.getElementById('genQ').addEventListener("keyup", updateSpeed);
  document.getElementById('genQ').addEventListener("click", updateSpeed);
  //document.getElementById('type').addEventListener("click", updateSpeed);
}


function updateSpeed(){
  gen = document.getElementById('generator').value;
  casing = document.getElementById('casing').value;
  genQ = parseInt(document.getElementById('genQ').value, 10);
  //base = parseInt(document.getElementById('type').value, 10);
  calc1 = casing*100+dict[gen]*40;
  document.getElementById('mass').value = "Weight: " + calc1.toFixed(2) + "kg";
  calc225 = 10+genQ;
  calc25 = dict2[gen]*calc225;
  calc2 = base + calc25;
  document.getElementById('lift').value = "Lift capacity: " + calc2 + "kg";
}
