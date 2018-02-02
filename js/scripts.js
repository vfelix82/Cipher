var getCipherCap = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence.slice(1, (sentence.length - 1));
  var lastLetter = sentence[sentence.length - 1].toUpperCase();
  var cipher = firstLetter + middle + lastLetter;
  return cipher;
}

var getCipherReverse = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence.slice(1, (sentence.length - 1));
  var lastLetter = sentence[sentence.length - 1].toUpperCase();
  var cipher = lastLetter + middle + firstLetter;
  return cipher;
}

var getCipherEnd = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence;
  var lastLetter = sentence[sentence.length - 1].toUpperCase();
  var cipher = middle + firstLetter + lastLetter;
  return cipher;
}

var reverse = function(string){
  return string.split("").reverse().join("");
}

var getCipherSelect = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var lastLetter = sentence[sentence.length - 1].toUpperCase();
  var middle = sentence;
  var select = Math.floor(sentence.length / 2);
  var middlePoint = sentence[select];
  var cipher = middlePoint + middle + firstLetter + lastLetter;
  var reverseCipher = reverse(cipher);
  return reverseCipher;
};

var giveCipher = function() {

  var sentence = prompt("type something here");
  alert(getCipherCap(sentence));
  alert(getCipherReverse(sentence));
  alert(getCipherEnd(sentence));
  alert(getCipherSelect(sentence));
}

giveCipher();


// var textInput = prompt("Please enter a sentence:");
// // var textInputlast = textInput.charAt(textInput.length-1);
// var textInputlast = textInput.slice(-1);
// var textInputfirst = textInput.charAt(0);
// var textInputAdd = textInputfirst + textInputlast
// var textaddcapitalize = textInputfirst.toUpperCase() + textInputlast.toUpperCase();
// // .reverse can only be use in a array so use .split to split the string to an array.//
// var splitString = textaddcapitalize.split("");
// var textreverse = splitString.reverse();
// var addoriginaltext = textInput + textreverse
// var mathorginaltext = textInput.length / 2;
// var middlePoint = textInput[mathorginaltext];
//
// console.log(middlePoint);
