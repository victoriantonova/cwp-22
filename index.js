console.log('Hi, package - v.1.0.0');

const Calculator = {
    calc: (expression) => {
        let stack = [];
        let tokens = expression.split(' ');

        for(let i = 0; i < tokens.length; i++){
            let token = tokens[i];

            if(Calculator.isNumber(token)){
                stack.push(parseInt(token));
            }
            if(Calculator.isOperand(token)){
                stack.push(
                    Calculator.doOperation(
                        token,
                        stack.pop(),
                        stack.pop()
                    )
                );
            }
        }
        return stack.pop();
    },

    doOperation: (operator, x, y) => {
        return Calculator.operations[operator](y, x);
    },

    operations: {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    },

    isNumber: (token) => {
        return /\d+/.test(token);
    },

    isOperand: (token) => {
        return /[-\+\*\/]/.test(token);
    }
};

module.exports = (expression, Text) => {
    console.log(Text);
    return Calculator.calc(expression);
};