class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int 
    i = 0, 
    j = 0, 
    el1 = 0, 
    el2 = 0, 
    count = 0, 
    midLeft = -1,
    len = nums1.length + nums2.length;

    while (i < nums1.length || j < nums2.length) {

      int current = 0;
      el1 = (i < nums1.length) ? nums1[i] : Integer.MAX_VALUE;
      el2 = (j < nums2.length) ? nums2[j] : Integer.MAX_VALUE;

      if (el1 <= el2) {
        current = el1;
        i++;
      } else if (el1 > el2) {
        current = el2;
        j++;
      }

      count++;

      if (len % 2 != 0) {
        if (count == (len - 1) / 2 + 1) {
          return (double) current;
        }
      } else {
        if (count == (len / 2)) {
          midLeft = current;
        } else if (count == (len / 2 + 1) && midLeft != -1) {
          return (double) (current + midLeft) / 2;
        }
      }
    }

    return 0.0;
  }
}