//
const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};
const add = function (x, y) {
  return x + y;
};

const sum = function (x, y) {
  return x - y;
};
doMath(2, 3, add);
doMath(2, 3, sum);
