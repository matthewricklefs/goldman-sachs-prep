const NO_OF_CHARS = 256;

function firstNonRepeating(str) {
  let arr = new Array(NO_OF_CHARS);

  for (let i = 0; i < NO_OF_CHARS; i++) {
    arr[i] = [0, 0];
  }

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)][0]++;
    arr[str.charCodeAt(i)][1] = i;
  }

  let res = Number.MAX_VALUE;

  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (arr[i][0] == 1) {
      res = Math.min(res, arr[i][1]);
    }
  }

  return res;
}

let str = 'geekforgeeks';
let index = firstNonRepeating(str);
console.log(str[index]);

// if (index == Number.MAX_VALUE) {
//   document.write('Either all characters are repeating or string is empty');
// } else {
//   document.write('First non-repeating character is ', str[index]);
// }
