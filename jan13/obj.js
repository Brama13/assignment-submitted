const m1 = [
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
  ];

  function sum(m1) {
    var sumDiagonals = {sum: 0},
      matrixLength = m1.length;
  
    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.sum += m1[i][i];
    }
    return sumDiagonals
  }
  
  console.log(sum(m1));