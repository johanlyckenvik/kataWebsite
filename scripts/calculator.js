function evaluate(str, callback){
    if((/\d+/g).test(str) && (/(\+|-|\*|\/){1}/g).test(str)){
    let nbrs = str.match(/\d+/g);
    let operator = str.match(/(\+|-|\*|\/){1}/g);
    
    if (!nbrs || !operator || operator.length !== 1 || nbrs.length !== 2 || parseFloat(nbrs[1]) === 0){
        callback({error: 'Unable to calculate, please try again'});
    } else {
        let num1 = parseFloat(nbrs[0]);
        let num2 = parseFloat(nbrs[1]);
        switch(operator[0]) {
            case '+':
                callback({result: num1 + num2});
                break;
            case '-':
                callback({result: num1 - num2});
                break;
            case '*':
                callback({result: num1 * num2});
                break;
            case '/':
                callback({result: num1 / num2});
                break;
                }
            }
        } else {
        callback({error: 'Unable to calculate, please try again'});
    }
}

let input = '';
let textInput = '';
let result = document.getElementById('result');

const displayNum = (num) => {
    input += num;
    result.textContent = input;
}   

const calculate = () => {
    if (input && !textInput){ 
        evaluate(input, (data) => {
            data.result ? result.textContent = data.result : result.textContent = "Error";
        });
    } else if (!input && textInput) {
        evaluate(textInput, (data) => { 
            data.result ? result.textContent = data.result : result.textContent = "Error";
        });
    } else {
        result.textContent = 'clear input';
    }
}

const clearInput = () => {
    input = '';
    result.textContent = '0';
}

const handleTextInput = () => {
    let inputField = document.getElementById('strInput').value;
    textInput = inputField;
}


