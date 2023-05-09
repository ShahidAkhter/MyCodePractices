const validParenthesis=(str) => {
    let paraToNum={
        "(":1,
        "[":2,
        "{":3,
        ")":-1,
        "]":-2,
        "}":-3
    }
    let arr=[];
    let sum=0;
    if (str.includes('(]') || str.includes('[)') || str.includes('[}') || str.includes('{]') || str.includes('{)') || str.includes('(}')) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        arr.push(paraToNum[element])
        sum+=paraToNum[element]
    }
    if (sum==0) {
        return true;
    }else{
        return false;
    }
}

console.log(validParenthesis("()"))
console.log(validParenthesis("()[]{}"))
console.log(validParenthesis("(]"))
