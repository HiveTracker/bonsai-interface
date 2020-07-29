var transform1, transform2;

function loadcalibration() {
  transform1 = new THREE.Matrix4();
  transform1.set(-0.00499747, 0.999494, 0.0314114, 0.0, 0.793024, -0.0151741, 0.609001, 0.0, 0.609169, 0.0279535, -0.792547, 0.0, 0.481608, 0.0675493, -0.873921, 1.0);
  transform1.transpose();
  
  transform2 = new THREE.Matrix4();
  transform2.set(-0.399916, -0.897446, -0.186168, 0.0, 0.706423, -0.431223, 0.561262, 0.0, -0.583982, 0.0929441, 0.806429, 0.0, -1.75751, 0.127674, 1.31759, 1.0);
  transform2.transpose();
}
 
