const findTheOldest = function(people) {
    return people.sort((a,b)=>{
        return getAge(a)-getAge(b);
    })[0];
};

function getAge(person){
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfBirth - person.yearOfDeath;
}

// Do not edit below this line
module.exports = findTheOldest;
