////Back End Logic
// Defining index number places into roman numeral value
var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
var thousands = ['', 'M', 'MM', 'MMM'];
var placeValues = [ones, tens, hundreds, thousands]

var userOutputArrayReversed = [];
///// Front End Logic
$(document).ready(function() {
  $("form#userInput").submit(function() {
    event.preventDefault();
    var userInputArrayReversed = $('input#userInput').val().split("").reverse();


    for (var i=0; i<placeValues.length; ++i) {
      if (userInputArrayReversed[i]) {
        var arabicNumber = parseInt(userInputArrayReversed[i])
        var romanNumeral = placeValues[i][arabicNumber]
        userOutputArrayReversed.push(romanNumeral);
        console.log(userOutputArrayReversed);
    //     romanNumeral.push(userOutputArrayReversed);
    //     console.log(userOutputArrayReversed);
    } else {
        var romanNumeral = placeValues[i][0]
        userOutputArrayReversed.push(romanNumeral);
        console.log(userOutputArrayReversed);

    };


    };
    var userOutput = userOutputArrayReversed.reverse().join("");
    console.log(userOutput);
    $('div.Result').text(userOutput);
  });
});
