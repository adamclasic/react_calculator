import operate from './operate';
const calculate = ({ total, next, operation }, buttonName ) => {

    const operators = ['+', '-', '/', '*'];

    if (buttonName === '+/-') {
      total *= -1;
      next *= -1;
    } else if (buttonName === 'AC') {
      total = 0;
      next = null;
      operation = null;
    } else if (btnName === '%') {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    } else if (btnName === '.' && next) {
      if (!next.includes('.')) {
        next += '.';
      }
    } else if (operators.includes(btnName)) {
      operate(total, next, operation);
    } else if ((btnName === '=') && (next && total)) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  
    return { total, next, operation };


}

export default calculate
