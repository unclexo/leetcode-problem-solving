class Solution {
  public int threeSumClosest(int[] nums, int target) {
    int length = nums.length;
    if (nums == null || length < 3) {
      return -1;
    }

    Arrays.sort(nums);
    int closestSum = nums[0] + nums[1] + nums[2];

    for (int i = 0; i < length; i++) {
      int left = i + 1, right = length - 1;
      while (left < right) {
        int sum = nums[i] + nums[left] + nums[right];
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
  }
}