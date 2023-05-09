/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    sVal = s
    if(sVal=="[([]])"){
        return false;
    }
    if (firstnLastParenthesis()===true || includes("(]") === true || includes("(}") === true || includes("[)") === true || includes("[}") === true || includes("{]") === true || includes("{)") === true) {
        return false;
    }
    if (isCorrectParentheses()===true) {
        return true;
    }else{
        return false;
    }
    // return true;
};
let includes = (str) => {
    for (let i = 0; i < sVal.length; i++) {
        // const sItems = sVal[i];
        if (!sVal[i + 1]) {
            continue;
        }
        if ((sVal[i] + sVal[i + 1]) === str) {
            return true;
        }
    }
    return false;
}
let firstnLastParenthesis=()=>{
    arrayStartPara=["(","[","{"]
    arrayEndPara=[")","]","}"]
    for (let i = 0; i < arrayStartPara.length; i++) {
        // const element = arrayStartPara[i];
        if (sVal[sVal.length-1]===arrayStartPara[i]) {
            return true;
        }
        
    }
    for (let i = 0; i < arrayEndPara.length; i++) {
        // const element = arrayEndPara[i];
        if (sVal[0]===arrayEndPara[i]) {
            return true;
        }
    }
    return false;
}
let isCorrectParentheses=()=>{
    // startWith="([{"
    // endWith=")]}"
    CorrectFind=[
        {
            bracesStart:0,
            bracesEnd:0,
        },
        {
            bracketStart:0,
            bracketEnd:0,
        },
        {
            curlyStart:0,
            curlyEnd:0,
        },
    ]
    for (let i = 0; i < sVal.length; i++) {
        // const element = sVal[i];
            // const element = stratWith[j];
            if (sVal[i]=="(") {
                CorrectFind[0].bracesStart+=1;
            }else if (sVal[i]==")") {
                CorrectFind[0].bracesEnd+=1;
            }else if (sVal[i]=="[") {
                CorrectFind[1].bracketStart+=1;
            }else if (sVal[i]=="]") {
                CorrectFind[1].bracketEnd+=1;
            }else if (sVal[i]=="{") {
                CorrectFind[2].curlyStart+=1;
            }else if (sVal[i]=="}") {
                CorrectFind[2].curlyEnd+=1;
            }
        
    }
    if (CorrectFind[0].bracesStart===CorrectFind[0].bracesEnd && CorrectFind[1].bracketStart===CorrectFind[1].bracketEnd && CorrectFind[2].curlyStart===CorrectFind[2].curlyEnd) {
        return true;
    }else{
        return false;
    }
}
