const repeatString = function(string, repetitions) {
  if (repetitions < 0) 
    return 'ERROR'
  let answerString = ''
  for (let i = 0; i < repetitions; i++) {
    answerString += string
  }
  return answerString
};

// Do not edit below this line
module.exports = repeatString;
