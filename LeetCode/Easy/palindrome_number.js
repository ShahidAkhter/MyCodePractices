/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    x = Number.parseInt(x)
    x = x.toString()
    // xlen = x.length;
    xVal = ''
    // console.log(x.length)
    for (let i = (x.length-1); i >= 0; i--) {
        const element = x[i];
        // console.log(element)
        xVal += element
    }
    
    // x = Number.parseInt(xVal)
    if(x === xVal){
        // x=xVal
        // console.log(x)
        return true;
    }else{
        return false;
    }
};
// isPalindrome("121")
isPalindrome(121)
// isPalindrome(-121)
// isPalindrome(10)