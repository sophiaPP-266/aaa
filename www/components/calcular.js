// This is a JavaScript file
$(document).on("click","#calc",function(){
  var valor1 = $("#n1").val();
  var valor2 = $("#n2").val();

  var calc = parseFloat(valor1) + parseFloat(valor2);

  $("#result").val(calc);
});