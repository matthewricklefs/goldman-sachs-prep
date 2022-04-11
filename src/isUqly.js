function maxDivide(a, b) {
  while (a % b == 0) a = a / b;
  return a;
}

function isUgly(no) {
  no = maxDivide(no, 2);
  no = maxDivide(no, 2);
  no = maxDivide(no, 5);

  return no == 1 ? 1 : 0;
}

function getNthUglyNo(n) {
  var i = 1;

  var count = 1;

  while (n > count) {
    i++;
    if (isUgly(i) == 1) {
      count++;
    }

    return i;
  }
}

var no = getNthUglyNo(150);

console.log('150th ugly' + 'no. is ' + no);
