var transform1, transform2;

function loadcalibration() {{
  transform1 = new THREE.Matrix4();
  transform1.set({0});
  transform1.transpose();
  
  transform2 = new THREE.Matrix4();
  transform2.set({1});
  transform2.transpose();
}}
