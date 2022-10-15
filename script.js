"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

button.onclick = function() {
  let f1 = document.getElementsByName("cost");
  let f2 = document.getElementsByName("count");
  let r = document.getElementById("result");
  if (!Number(f1[0].value) || !Number(f2[0].value)) {
    alert("Вводить можно только числа");
    r.innerHtML = none;
    return false;
  }
  
  if (f1[0].value < 0 || f2[0].value < 0) {
    alert("Здесь не может быть отрицательных чисел");
    r.innerHtML = none;
    return false;
  }
  r.innerHTML = f1[0].value * f2[0].value;
  return false;
}
