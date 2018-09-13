/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
function turnMeBaby(str){
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

export default turnMeBaby;
