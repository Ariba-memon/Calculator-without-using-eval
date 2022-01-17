var lastValue, operand1 = "", operand2 = "", operator = "", total = "", lastoperator;

function calculator(val) {

    if (operand1 == "" && operand2 == "" && (val == '+' || val == '-' || val == '*' || val == '/' || val == '%')) {
        document.getElementById("total").value = "Invalid Input";
        operator = "";
    } else {
        if (val == '+' || val == '-' || val == '*' || val == '/' || val == '%') {
            operator = val;


        } else {
            if (operator == "") {
                operand1 = operand1 + val;
            } else if (operator != "" && operator != "") {
                operand2 += val;
            }
        }
        document.getElementById("consoleResult").value += val
        lastValue = val;


    }


}

function arithmeticOperation() {
	
	if(operand2 == "" && (operator == '*' || operator == '/' || operator == '%')){
		operand2 = 1;
	}else if(operand2 == "" && (operator == '-' || operator == '+')){
		operand2 = 0;
	}
    if (operator == '+') {
        return +operand1 + +operand2;
    } else if (operator == '-') {
        return operand1 - operand2;
    } else if (operator == '*') {
        return operand1 * operand2;
    } else if (operator == '/') {
        return operand1 / operand2;
    } else if (operator == '/') {
        return Math.sqrt(operand1);
    } else if (operator == '%') {
        return Math.pow(operand1, operand2);
    } else {
        return +operand1 + +operand2;
    }

}

function solve() {

    document.getElementById("total").value = 0;
    let result = arithmeticOperation(operand1, operand2, operator);
    operand1 = result;
    document.getElementById("total").value = result;
    document.getElementById("consoleResult").value = result;
    operand1 = result, operand2 = "", operator = "";
}

function clr() {
    document.getElementById("consoleResult").value = "";
    document.getElementById("total").value = "0";
    operand1 = "", operand2 = "", operator = "";
}
