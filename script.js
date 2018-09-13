
function getAvarage(question) {
  let $inputs = $(".provsvar div:nth-child("+question+") .answer");
  let sum = 0;
  for(let i = 0; i < $inputs.length; i++) {
    if($inputs.eq(i).val() > 0) {
      sum += parseFloat($inputs.eq(i).val());
    }
  }
  return sum / $inputs.length;
}

$(document).ready(function(){
  $("input").on("input", function(){  

    updateDiagram();
  });
});

function updateDiagram() {

  let avarage = getAvarage(1);
}