const palindromes = function (word) {

    let str = word.toLowerCase()
        .split('')
        .filter(c => c.match(/[a-z]/i) || c.match(/^[0-9]$/))
        .join('');
    return str === str.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
