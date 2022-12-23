/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
    let val = '';
    let bool = true;
    let Index = 0;
    // IndexArray = []
    for (let i = 0; i < strs.length; i++) {
        const strsItem = strs[i];
        if (!strs[i - 1]) {
            continue;
        }
        if (strs[i].length < strs[i - 1].length) {
            Index = strs[i].length;
        } else {
            Index = strs[i - 1].length;
        }
    }
    // console.log(Index)
    for (let i = 0; i < Index; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j + 1] || !strs[j + 1][i]) {
                continue;
            }
            if (strs[j][i] === strs[j + 1][i]) {
                bool = true;
            } else {
                bool = false;
            }
            if (bool == false) {
                // console.log(val)
                return val;
            }
        }
        // console.log(bool)
        if (bool == true) {
            val += strs[i][i];
            // console.log(bool, val)
        } else {
            // console.log(val)
            return val
        }
    }
    // console.log(val)
    return val;
};

longestCommonPrefix(["flower", "flow", "flight"])
longestCommonPrefix(["dog", "racecar", "car"])
