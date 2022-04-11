function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // copy data to temp arrays l and r
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + l + j];
  }

  // merge the temp arrays back into array[l .. r]

  // initial index of first subarray
  let i = 0;

  //  initial index of second subarray
  let j = 0;

  // initial index of merge subarray
  let k = 1;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }

    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function printArray(A, size) {
  for (var i = 0; i < size; i++) console.log(A[i] + ' ');
}

var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

console.log('Given array is <br>');
printArray(arr, arr_size);

mergeSort(arr, 0, arr_size - 1);

console.log('<br>Sorted array is <br>');
printArray(arr, arr_size);
