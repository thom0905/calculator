function equivalentCheck() { //this allows last value to remain in view until other buttons are pressed
    if (parseInt(document.getElementById("equivalent").value)) {
        document.getElementById("equivalent").value = 0;
        document.getElementById("result").value = 0;
    }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById("result").value);

    if (document.getElementById("decimalVar").value == 0) {
        x += y * 10; //multiplies text input by 10 and adds to value of x 

        document.getElementById("result").value = x; //returns x to the text output
    }
    else { //if decimal is true
        let decimalCount = parseInt(document.getElementById("decimalVar").value);


    
            if (decimalCount == 1) { 
                x *= 1/10; //places the decimal point
                y += x;
                document.getElementById("result").value = y;
            } 
            else {
                document.getElementById("result").value += x;
            }
        
        decimalCount++;

        document.getElementById("decimalVar").value = decimalCount;
    }

    
}

function decimalPoint() {
    if (document.getElementById("decimalVar").value == 0) { //this prevents multiple decimal points
        document.getElementById("decimalVar").value = 1;
    } 

    if (parseInt(document.getElementById("operation").value)) { //if the operation is an empty string, it will return false 
        document.getElementById("result").value = 0;
    }
}

function operandCheck() { //checks to see if document has operand inputted
    if(document.getElementById("operand").value == "") {
        document.getElementById("operand").value = document.getElementById("result").value;
        //document.getElementById("result").value = 0; 
        document.getElementById("equivalent").value = 1;
    } 
    else {
        operatorCheck();
    }
}

function operatorCheck() {
    let a = parseFloat(document.getElementById("operand").value);
    let b =parseFloat(document.getElementById("result").value);

    switch(parseInt(document.getElementById("operation").value)) {
        case 1: //addition
            a += b;
            break;
        case 2: //subtraction
            a -= b;
            break;
        case 3: //multiplication
            a *= b;
            break;
        case 4: //division
            a /= b;
            break;
        default:
    }

    document.getElementById("operand").value = a; //stores new number as the new operand that can be augmented by further input
    document.getElementById("result").value = a; //returns the new value to the result text box
    document.getElementById("equivalent").value = 1;
}

function operators(x){

    switch(x) {
        case(1):
            document.getElementById("operation").value = 1; //addition
            break;
        case(2):
            document.getElementById("operation").value = 2; //subtraction
            break;
        case(3):
            document.getElementById("operation").value = 3; //multiplication
            break;
        case(4):
            document.getElementById("operation").value = 4; //division
            break;
        default:
    }

    operandCheck();
}

function equals() {
    operators(parseInt(document.getElementById("operation").value))
    document.getElementById("result").value = document.getElementById("operand").value;
    document.getElementById("operand").value = "";
    document.getElementById("equivalent").value = 1;
}

function allClear() {
    document.getElementById("result").value = 0;
    document.getElementById("operand").value = "";
    document.getElementById("operation").value = 0;
    document.getElementById("equivalent").value = 0;
}

function plusminus() {
    let x = parseFloat(document.getElementById("result").value); //sets a variable, x, with the value of result

    x *= -1; //multiplies x by minus 1, creating a minus number

    document.getElementById("result").value = x; //returns the value of x as the new result
}

function percent() {
    let x = parseFloat(document.getElementById("result").value); //sets a variable, x, with the value of result

    x *= 0.01; //multiplies x by 0.01, returning x as a percentage of the above value

    document.getElementById("result").value = x; //returns the value of x as the new result

}

function square() {
    let x = parseFloat(document.getElementById("result").value); 

    x *= x; //multiplies x by x

    document.getElementById("result").value = x; //returns the value of x as the new result

}