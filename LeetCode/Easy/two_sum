/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Using For Loop
let For_twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        // const element = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (i === j && nums[j + 1]) {
                j = j + 1
            }
            // const element = nums[j];
            sum = nums[i] + nums[j]
            if (sum == target) {
                output = [i, j]
                return output;
            }
            if (i == (nums.length - 1) && j == (nums.length - 1)) {
                output = ["Not Found"];
                return output;
            }
        }
    }
}

// Using While Loop
let While_twoSum = (nums, target) => {
    j = 0;
    i = 0;
    while (i<nums.length) {
        if (i === j && nums[j + 1]) {
            j = j + 1
        }
        // const element = nums[j];
        sum = nums[i] + nums[j]
        if (sum === target) {
            output = [i, j]
            return output;
        }
        j=j+1;
        if (i == (nums.length - 1) && j == (nums.length - 1)) {
            output = ["Not Found"];
            return output;
        }
        if (j >= (nums.length - 1)) {
            j=0;
            i=i+1;
        }
    }
}

// twoSum([3, 3], 6)
// twoSum([1, 4, 3], 4)
// twoSum([1, 9, 8], 10)

// For Loop
For_twoSum([3, 3], 6)
console.log(output)
For_twoSum([2, 7, 11, 15], 9)
console.log(output)
For_twoSum([3, 2, 4], 6)
console.log(output)
For_twoSum([3, 2, 4], 4)
console.log(output)

// While Loop
While_twoSum([3, 3], 6)
console.log(output)
While_twoSum([2, 7, 11, 15], 9)
console.log(output)
While_twoSum([3, 2, 4], 6)
console.log(output)
While_twoSum([3, 2, 4], 4)
console.log(output)
