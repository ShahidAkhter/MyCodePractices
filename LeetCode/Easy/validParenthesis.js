const validParenthesis = (str) => {
    let paraToNum = {
        "(": 1, "[": 2, "{": 3, ")": -1, "]": -2, "}": -3
    }
    let invalidpara = [
        '(]', '[)', '[}', '{]', '{)', '(}'
    ]
    let CorrectFind = {
        '(':0, '[':0, '{':0, ')':0, ']':0, '}':0,
    }
    // let arr = [];
    let sum = 0;
    for (let i = 0; i < invalidpara.length; i++) {
        const element = invalidpara[i];
        if (str.includes(element)) {
            return false;
        }
    }
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        CorrectFind[element]+=1;
        if (CorrectFind["("]<CorrectFind[")"] || CorrectFind["["]<CorrectFind["]"] || CorrectFind["{"]<CorrectFind["}"]) {
            return false;
        }
        // arr.push(paraToNum[element])
        sum += paraToNum[element]
        // console.log(sum)
    }
    // console.log(arr)
    if (sum == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validParenthesis("[([]])"))
console.log(validParenthesis("()"))
console.log(validParenthesis("()[]{}"))
console.log(validParenthesis("(]"))
