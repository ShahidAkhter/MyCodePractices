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
        // const strsItem = strs[i];
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
    i=0;
    j=0;
    while (i<Index) {
        if (!strs[j + 1] || !strs[j + 1][i]) {
            continue;
        }
        if (strs[j][i] === strs[j + 1][i]) {
            bool = true;
        } else {
            bool = false;
        }
        // console.log(bool, val)

        if (bool == false) {
            // console.log(val)
            return val;
        }

        j=j+1;
        if (j >= (strs.length - 1)) {
            j=0;
            if (bool == true) {
                val += strs[j][i];
                // console.log(bool, val)
            } else {
                // console.log(val)
                return val
            }
            i=i+1;
        }
    }
    // console.log(val)
    return val;
};

longestCommonPrefix(["flower", "flow", "flight"])
longestCommonPrefix(["dog", "racecar", "car"])
longestCommonPrefix(["goooooogledog", "goooooogleracecar", "gooooooglecar"])
