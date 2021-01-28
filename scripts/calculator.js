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
// Only two numbers
// if number is clicked - add correct int num to it.
// if + - / is clicked - add correct operation.
// if = sign is clicked - calculate
// store result - add everything to result and display if = is clicked

let input = '';
let result = document.getElementById('result');

const displayNum = (num) => {
    //let result = document.getElementById('result').value;
    input += num;
    result.textContent = input;
    console.log(input)
}   

const calculate = () => {
    
    evaluate(input, (data) => {
        data.result ? result.textContent = data.result : result.textContent = data.error;
    });
}

const clearInput = () => {
    input = '';
    result.textContent = '0';
    console.log(input);

}


