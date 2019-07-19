document.addEventListener('DOMContentLoaded', function() {

  const calcScreen = document.getElementById('screen');
  const buttons = Array.from(document.querySelectorAll('span'));
  const clear = document.getElementById('clear');

  let firstNum = '';
  let secondNum = '';
  let operator = '';
  let result = '';

  const doThis = function() {
    if (event.target.className != 'operator') {
        calcScreen.innerText += event.target.innerText;
    } else if (event.target.className == 'operator' && event.target.id == '' && calcScreen.innerText != '') {
        firstNum = calcScreen.innerText;
        calcScreen.innerText = event.target.innerText;
        operator = event.target.innerText;
    } else if (event.target.id == 'equals') {
        secondNum = calcScreen.innerText.slice(1);
        if (operator == '+') {
          result = parseInt(firstNum) + parseInt(secondNum);
          calcScreen.innerText = result.toString();
        } else if (operator == '-') {
          result = parseInt(firstNum) - parseInt(secondNum);
          calcScreen.innerText = result.toString();
        } else if (operator == 'x') {
          result = parseInt(firstNum) * parseInt(secondNum);
          calcScreen.innerText = result.toString();
        } else if (operator == '÷') {
          result = parseInt(firstNum) / parseInt(secondNum);
          calcScreen.innerText = result.toString();
        } else {
          calcScreen.innerText = 'error'
        }
    }
    return;
  } 

  const imbueButtons = function(buttons) {
      for (i = 0; i < buttons.length; i++) {
        let thisButton = buttons[i];
        thisButton.addEventListener('click', doThis)
      }
  }

  clear.addEventListener('click', function() {
    calcScreen.innerText = '';
    firstNum = '';
    secondNum = '';
    operator = '';
  })

  imbueButtons(buttons);
});
