function areEqual(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  // if lengths of both array are not equal, arrays are not equal
  if (n != m) {
    return false;
  }

  // sort both array
  arr1.sort();
  arr2.sort();

  // linearly compare elements
  for (let i = 0; i < n; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  // if all elements were the same;
  return true;
}

let arr1 = [3, 5, 2, 5, 2];
let arr2 = [2, 3, 5, 5, 2];

console.log(areEqual(arr1, arr2));
