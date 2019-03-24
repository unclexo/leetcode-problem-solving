var threeSumClosest = function(nums, target) {
  const length = nums.length;
  if (nums == null || length < 3) {
    return -1;
  }

  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < length; i++) {
    let left = i + 1, right = length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], -1));