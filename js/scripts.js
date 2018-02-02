var getCipherCap = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence.slice(1, (sentence.length - 1));
  var lastLetter = sentence.slice(-1).toUpperCase();
  var cipher = firstLetter + middle + lastLetter;
  return cipher;
}

var getCipherReverse = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence.slice(1, (sentence.length - 1));
  var lastLetter = sentence.slice(-1).toUpperCase();
  var cipher = lastLetter + middle + firstLetter;
  return cipher;
}

var getCipherEnd = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence;
  var lastLetter = sentece.slice(-1).toUpperCase();
  var cipher = middle + firstLetter + lastLetter;
  return cipher;
}

var reverse = function(string){
  return string.split("").reverse().join("");
}

var getCipherSelect = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var lastLetter = sentence.slice(-1).toUpperCase();
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
