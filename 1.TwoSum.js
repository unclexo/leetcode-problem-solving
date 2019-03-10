var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [parseInt(map[nums[i]]), parseInt(i)];
    } else {
      map[target - nums[i]] = i;
    }
  }
};