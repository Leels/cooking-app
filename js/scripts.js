//backend logic

var ounces = function(grams) {
  return (grams / 28.34952);
};

var teaspoons = function(gallon) {
 return (gallon * 768);
};

var liter = function(quart) {
  return (quart * 0.946353);
};


console.log()

$(document).ready(function() {
  $("form#conversion").submit(function(event) {
    event.preventDefault();


    var grams = parseFloat($("input#grams").val());
    var result = ounces(grams).toFixed(2);

    var gallon = parseFloat($("input#gallon").val());
    var result2 = teaspoons(gallon).toFixed(2);

    var quart = parseFloat($("input#quart").val());
    var result3 = liter(quart).toFixed(2);

    $(".grams").text(result);
    $("#result").show();

    $(".gallon").text(result2);
    $("#result2").show();

    $(".quart").text(result3);
    $("#result3").show();
     });
   });
