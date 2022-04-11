function printString(columnNum) {
  let columnName = [];

  while (columnNum > 0) {
    let rem = columnNum % 26;

    if (rem == 0) {
      columnName.push('Z');
      columnNum = Math.floor(columnNum / 26) - 1;
    } else {
      columnName.push(String.fromCharCode(rem - 1 + 'A'.charCodeAt(0)));
      columnNum = Math.floor(columnNum / 26);
    }
  }

  console.log(columnName.reverse().join('') + '\n');
}

printString(26);
printString(51);
printString(52);
printString(80);
printString(676);
printString(702);
printString(705);
