const findTheOldest = function(people) {
  const getAge = (person) => {
    if (person.yearOfDeath == undefined) {
      return 2025 - person.yearOfBirth
    }

    return person.yearOfDeath - person.yearOfBirth
  }

  return people.reduce((max, current) => {
    max = getAge(current) > getAge(max) ? current : max
    return max
  })
};

// Do not edit below this line
module.exports = findTheOldest;
