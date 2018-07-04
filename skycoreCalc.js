var gen;
var casing;
var dict = {'aluminum':0.26,'copper':0.50,'silver':0.55,'gold':0.69,'n/a':0};
var dict2 = {'aluminum':6,'copper':7.5,'silver':8,'gold':8.5,'n/a':0};
var genQ;
var calc1;
var calc2;
window.onload  = function() {
  document.getElementById('casing').addEventListener("click", updateSpeed);
  document.getElementById('generator').addEventListener("click", updateSpeed);
  document.getElementById('genQ').addEventListener("keyup", updateSpeed);
}


function updateSpeed(){
  gen = document.getElementById('generator').value;
  casing = document.getElementById('casing').value;
  genQ = document.getElementById('genQ').value;
  calc1 = casing*100+dict[gen]*40.toFixed(2);
  document.getElementById('mass').value = "Weight: " + calc1 + "kg";
  calc2 = 1000+(dict2[gen]*(10+genQ));
  document.getElementById('lift').value = "Lift capacity: " + calc2 + "kg";
}
