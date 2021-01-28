const fizzbuzz = array => array.map(input => {
  // Input from users?
  // Manipulate DOM?

    switch (true) {
      case input < 0:
        return 'Please provide a positive number. Try again';
      case input > 100:
        return 'Please provide a number below 100';
      case typeof input !== 'number':
        return 'Please provide a number. Try again';
      case input % 15 === 0:
        return 'FizzBuzz';
      case input % 3 === 0:
        return 'Fizz';
      case input % 5 === 0:
        return 'Buzz';
      default:
        return input;
    }
  });

  const createElement = (el, textContent, id) => {
    let element = document.createElement(el);
    //element.href = '/fizzbuzz';
    element.id = id;
    element.textContent = textContent;
    return element;
  }


  const evalFizzBuzz = (elemId) => {
    const innerWrapper = document.querySelectorAll('.fizz-wrapper')[0];
    const button = document.getElementById(elemId);
    const numButton = document.getElementById('b4');
    let counter = document.querySelector('#counter');
    let whatsNext = document.getElementById('nextH3');
    let tryAgain = createElement('a', 'Try again?', 'tryAgain');
    tryAgain.href = '/fizzbuzz';
    let contentDiv = document.querySelectorAll('.content')[0];
    let buttonContainer = document.getElementById('buttonContainer');
    let userInput = [parseInt(counter.textContent) + 1];
    let output = fizzbuzz(userInput);
    let score = userInput[0] - 1;

    
    console.log('fizz buzz output', output);
    console.log('element value', button.value);
    console.log(tryAgain);
    console.log(output[0])

    
    
    counter.textContent = userInput[0];
    if (button.value != output[0]){
      counter.textContent = 'GAME OVER';
      console.log(userInput[0] - 1);
      contentDiv.removeChild(whatsNext);
      innerWrapper.removeChild(buttonContainer);
      contentDiv.appendChild(createElement('div', `Score: ${score - 1}`, 'score'));
      switch(true){
        case score >= 5: 
            let msg1 = createElement('div', 'The force is strong in this one. Well done.', 'message1');
            msg1.classList.add('failMessage');
            contentDiv.appendChild(msg1);
            break;
        case score >= 2: 
            let msg2 = createElement('div', 'You have not finished your training yet, young padawan.', 'message2');
            msg2.classList.add('failMessage');
            contentDiv.appendChild(msg2);
            break;
        case score >= 1: 
            let msg3 = createElement('div', "It's not always good to fail first.", 'message3');
            msg3.classList.add('failMessage');
            contentDiv.appendChild(msg3);
            break;
      }
      contentDiv.appendChild(tryAgain);
    }
    numButton.textContent = parseInt(userInput[0]) + 1;
    numButton.value = parseInt(userInput[0]) + 1;

  }
  
