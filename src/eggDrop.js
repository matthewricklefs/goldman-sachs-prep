function eggDrop(n, k) {
  // if there are no floors, then no trials needed.
  // OR if there is one floor, one trial needed.

  if (k == 1 || k == 0) {
    return k;
  }

  // we need k trials for one egg and k floors
  if (n == 1) {
    return k;
  }

  let min = Number.MAX_VALUE;
  let x, res;

  // consider all droppings from 1st floot to kth floor and return min number of these values plus 1
  for (x = 1; x <= k; x++) {
    res = Math.max(eggDrop(n - 1, x - 1), eggDrop(n, k - x));

    if (res < min) {
      min = res;
    }
  }

  return min + 1;
}

let n = 2,
  k = 10;

console.log(
  'Minimum number of ' +
    'trials in worst case with ' +
    n +
    ' eggs and ' +
    k +
    ' floors is ' +
    eggDrop(n, k)
);
