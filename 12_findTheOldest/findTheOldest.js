const findTheOldest = function(arr = []) {
    return arr.reduce((oldest, person, index) => {
        let age, prevAge;
        
        prevAge = index > 0 ? 
        (
            "yearOfDeath" in arr[index - 1] ?
            arr[index - 1].yearOfDeath - arr[index - 1].yearOfBirth :
            new Date().getFullYear() - arr[index - 1].yearOfBirth
        ) : 0;

        age = "yearOfDeath" in person ? 
            person.yearOfDeath - person.yearOfBirth :
            new Date().getFullYear() - person.yearOfBirth;
        oldest = age >= prevAge ? person : oldest;
        return oldest;
    }, {})
}
// Do not edit below this line
module.exports = findTheOldest;