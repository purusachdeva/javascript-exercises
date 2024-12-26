const removeFromArray = function(arr, ...args) {
  // return arr.filter(val => !args.includes(val))

  let newArray = []

  arr.forEach(val => {
    if (!args.includes(val)) {
      newArray.push(val) 
    }
  });

  return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
