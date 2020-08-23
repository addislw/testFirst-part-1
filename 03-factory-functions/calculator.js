/* eslint-disable no-unused-vars */
/*
function createCalculator() {
  return {
    total: 0,
    add(x) {
      this.total += x;
    },
  };
}
*/

const createCalculator = () => {
  let calculator = {
    total: 0,
    add(x) {
      this.total += x;
    },
    subtract(x) {
      this.total -= x;
    },
    value() {
      return this.total;
    },
    clear() {
      this.total = 0;
    },
  };

  return calculator;
};
