class Solution {
	public int[] twoSum(int[] nums, int target) {
		int[] result = new int[2];

		if (nums == null || nums.length == 0) {
			return result;
		}

		HashMap<Integer, Integer> existed = new HashMap<>();

		for (int i = 0; i < nums.length; i++) {
			if (existed.containsKey(target - nums[i])) {
				result[0] = existed.get(target - nums[i]);
				result[1] = i;
				return result;
			}
			existed.put(nums[i], i);
		}

		return result;
	}
}
