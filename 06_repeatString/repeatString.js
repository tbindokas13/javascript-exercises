const repeatString = function(word,repeatTimes) {
    if(repeatTimes<0) return "ERROR";
    let output=""
    for(let i=0;i<repeatTimes;i++) output +=word;
    return output;
};

// Do not edit below this line
module.exports = repeatString;
