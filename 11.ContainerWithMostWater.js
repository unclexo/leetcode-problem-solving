var maxArea = function (height) {
  let max = 0;
  i = 0,
    j = height.length - 1;
  while (i < j) {
    let min = Math.min(height[i], height[j]);
    max = Math.max(max, min * (j - i));
    height[i] < height[j] ? i++ : j--;
  }
  return max;
};