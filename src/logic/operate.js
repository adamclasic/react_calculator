/* eslint-disable eqeqeq, no-else-return, consistent-return */
import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || '0');
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '/') {
    if (two == '0') {
      return 'Divide by 0 error';
    } else {
      return one.div(two).toString();
    }
  }
}

export default operate;
