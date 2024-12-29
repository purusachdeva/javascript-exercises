function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

const palindromes = function (string) {
  let a = 0
  let b = string.length - 1

  while (a < b) {
    while(!isAlphaNumeric(string[a])) 
      a++

    while(!isAlphaNumeric(string[b])) 
      b--

    if (string[a].toLowerCase() !== string[b].toLowerCase()) 
      return false

    a++
    b--
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
