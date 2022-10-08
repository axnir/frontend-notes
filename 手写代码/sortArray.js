var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let midNum = nums.splice(mid, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (midNum > nums[i]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return sortArray(left).concat([midNum], sortArray(right));
};

let nums = [2, 4, 5, 6, 3, 3, 23, 4, 6, 84, 46546, 34, 34, 54, 5, 4, 5];
let nums2 = [5, 1, 1, 2, 0, 0];
console.log(sortArray(nums2));
