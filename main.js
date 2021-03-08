let result = document.getElementById("result");


function edit(elem) {
  if (result.value == "" && elem.value == "0"){
  return;
  } else {
  result.value = result.value + elem.value;
  document.getElementById("result").classList.remove("red");
  console.log(result.value);
  }
}


// イコールボタンで起動。計算
function calc(){
  document.getElementById("result").classList.remove("red");
  result.value = eval(result.value);
}

function allClear() {
  document.getElementById("result").classList.remove("red");
  result.value = "";
}