/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanNum=[];
    for (let i = 0; i < s.length; i++) {
        const Item = s[i];
        switch (Item) {
            case "I":
                romanNum.push(1);
                break;
            case "V":
                romanNum.push(5);
                break;
            case "X":
                romanNum.push(10);
                break;
            case "L":
                romanNum.push(50);
            case "C":
                romanNum.push(100);
                break;
            case "D":
                romanNum.push(500);
                break;
            case "M":
                romanNum.push(1000);
                break;
        
            default:
                break;
        }
    }
    // console.log(romanNum)
    roman=0
    for (let j = 0; j <= romanNum.length; j++) {
        const ItemRomanNum = romanNum[j];
        if (!romanNum[j-1]) {
            continue;
        }
        if (ItemRomanNum>romanNum[j-1]) {
            roman=roman-romanNum[j-1]
        }else{  
            roman=roman+romanNum[j-1]
        }
    }
    // console.log([romanNum,roman])
    return roman;
};

romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")