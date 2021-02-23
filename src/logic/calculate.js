
const calculate = ({ total, next, operation }, buttonName ) => {

    const operators = ['+', '-', '/', '*'];

    if (buttonName === '+/-') {
      total *= -1;
      next *= -1;
    } else if (buttonName === 'AC') {
      total = 0;
      next = null;
      operation = null;
    }
  
    return { total, next, operation };


}

export default calculate
