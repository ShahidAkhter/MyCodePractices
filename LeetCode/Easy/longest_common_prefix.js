/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let val = '';
    let bool = true;
    let Index = 0;
    if (strs.length<=1) {
        return strs[0];
    }
    for (let i = 0; i < strs.length; i++) {
        if (!strs[i - 1]) {
            continue;
        }
        if (strs[i].length < strs[i - 1].length) {
            Index = strs[i].length;
        } else {
            Index = strs[i - 1].length;
        }
        if(Index<=0){
            return val;
        }
    }
    i=0;
    j=0;
    while (i<Index) {
        if (!strs[j + 1]) {
            continue;
        }
        if (strs[j][i] === strs[j + 1][i]) {
            bool = true;
        } else {
            bool = false;
        }

        if (bool == false) {
            return val;
        }

        j=j+1;
        if (j >= (strs.length - 1)) {
            j=0;
            if (bool == true) {
                val += strs[j][i];
            } else {
                return val
            }
            i=i+1;
        }
    }
    return val;
};
