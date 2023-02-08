/**
 * 1. 两数之和
 * 涉及的知识点：数组、哈希表
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

// 测试
let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
