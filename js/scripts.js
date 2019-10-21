//backend logic

var ounces = function(grams) {
  return (grams / 28.34952);
};

// var teaspoons = function(gallon) {
//   return (gallon * 768);
// };
// var gallonsToTeaspoons = teaspoons.toFixed(2);
//
// var liter = function(quart) {
//   return (quarts * 0.946353);
// };
// var quartsToLiters = liters.toFixed(2);

console.log()

$(document).ready(function() {
  $("form#conversion").submit(function(event) {
    event.preventDefault();


    var grams = parseFloat($("input#grams").val());
    var result = ounces(grams).toFixed(2);

    $(".grams").text(result);

    $("#result").show();
     });
   });
