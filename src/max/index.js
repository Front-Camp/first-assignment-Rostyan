/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  for (var i = 0; i < max.length; i++) {
    if (max[i] > max[0]) {
      max[0] = max[i];
    }
  }
};

max([1, 2, 4]);
max([-1, 0]);

export default max;
