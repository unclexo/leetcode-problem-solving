var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0,
    j = 0,
    count = 0,
    midLeft = null,
    len = nums1.length + nums2.length;

  while (i < nums1.length || j < nums2.length) {

    let current = 0;

    if (j >= nums2.length || nums1[i] <= nums2[j]) {
      current = nums1[i++];
    } else if (i >= nums1.length || nums1[i] > nums2[j]) {
      current = nums2[j++];
    }

    count++;

    if (len % 2 !== 0) {
      if (count === (len - 1) / 2 + 1) {
        return current;
      }
    } else {
      if (count === len / 2) {
        midLeft = current;
      } else if (count === (len / 2 + 1) && midLeft !== null) {
        return (current + midLeft) / 2;
      }
    }
  }

  return 0;
};