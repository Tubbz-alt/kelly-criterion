"use strict";

module.exports = ({ bankroll, odds, probability, fractional = 1 }) => {
  if (
    typeof bankroll !== "number" ||
    typeof odds !== "number" ||
    typeof probability !== "number" ||
    typeof fractional !== "number"
  ) {
    throw new TypeError("All parameters should be numbers");
  }

  if (probability < 0 && probability > 1) {
    throw new TypeError("Probability should be between 0 and 1");
  }

  if (fractional < 0 && fractional > 1) {
    throw new TypeError("Fractional should be between 0 and 1");
  }

  const result = {
    amount: 0,
    percentage: 0,
    profit: 0,
    real: 0,
    value: 0,
  };

  const mapper = (value) => (precision) => Number(value.toFixed(precision));

  result.value = mapper(odds * probability)(2);
  result.real = mapper(1 / probability)(2);

  if (result.value < 1) {
    return result;
  }

  result.percentage = mapper(
    (((odds - 1) * probability - (1 - probability)) / (odds - 1)) * fractional
  )(3);
  result.amount = mapper(result.percentage * bankroll)(2);
  result.profit = mapper(result.amount * (odds - 1))(2);

  return result;
};
