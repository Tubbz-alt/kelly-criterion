import test from "ava";
import kelly from ".";

test("low value bet", (t) => {
  t.deepEqual(kelly({ bankroll: 1000, odds: 1.8, probability: 0.6 }), {
    amount: 100,
    fraction: 0.1,
    profit: 80,
    real: 1.67,
    value: 1.08,
  });
});

test("high value bet with fractional formula", (t) => {
  t.deepEqual(
    kelly({ bankroll: 1000, odds: 2.0, probability: 0.8, fractional: 0.25 }),
    { amount: 150, fraction: 0.15, profit: 150, real: 1.25, value: 1.6 }
  );
});

test("no value bet", (t) => {
  t.deepEqual(kelly({ bankroll: 1000, odds: 2.5, probability: 0.35 }), {
    amount: 0,
    fraction: 0,
    profit: 0,
    real: 2.86,
    value: 0.875,
  });
});

test("not enough params", (t) => {
  const error = t.throws(
    () => {
      kelly({ bankroll: 1000 });
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "Not enough parameters");
});

test("wrong params", (t) => {
  const error = t.throws(
    () => {
      kelly({ bankroll: 1000, odds: 2.2, probability: "high" });
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "All parameters must be numbers");
});

test("params out of range", (t) => {
  const error = t.throws(
    () => {
      kelly({ bankroll: 1000, odds: 2.0, probability: 100 });
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, "Probability and fractional must be between 0 and 1");
});
