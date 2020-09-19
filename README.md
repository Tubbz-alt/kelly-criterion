# kelly-criterion

> [Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion).

## Install

```
$ npm install @kamdz/kelly-criterion
```

## Usage

```js
const kelly = require("@kamdz/kelly-criterion");

kelly({ bankroll: 1000, odds: 1.8, probability: 0.6, fractional: 0.25 });
//=> { amount: 25, fraction: 0.025, profit: 20, real: 1.67, value: 1.08 }
```

## kelly({bankroll, odds, probability, fractional?})

### params

Type: `Object`\
Structure: `{ bankroll, odds, probability, fractional? }`

#### bankroll

Type: `number`

Available funds.

#### odds

Type: `number`

Odds in decimal (European) format.

#### probability

Type: `number`

Chance of winning.

#### fractional

Type: `number`\
Default: `1`

If you want to calculate 'Fractional Kelly Formula', which means betting a certain fraction of a recommended bet.

### return

Type: `Object`\
Structure: `{ amount, fraction, profit, real, value }`

##### amount

Type: `number`\
Default: `0`

Bet you should play.

##### fraction

Type: `number`\
Default: `0`

Fraction of your bankroll you should play.

##### profit

Type: `number`\
Default: `0`

Your potential profit in case of win.

##### real

Type: `number`\
Default: `0`

Real fair odds in decimal (European) format.

##### value

Type: `number`\
Default: `0`

Value of bet. If less than 1 you should lay this bet.
