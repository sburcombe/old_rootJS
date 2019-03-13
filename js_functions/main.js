 function myMessage(){
    console.log("Hello everybody!");
 }

 function add(number1, number2) {
    var total = number1 + number2;
     console.log(number1 + ' + ' + number2 + ' = ' + total);
}

 function addWithReturn(number1, number2) {
    var total = number1 + number2;

    return total;
 }

    var addWithReturnResult = addWithReturn(8,34);

 function cardFlip(clickedElement) {
     $(clickedElement).hide();

 }
 function add2(add2, add2){
     var result = add2(add2(5, 10), add2(20, 30));
     console.log(add2);
 }///Do I need to add something to the index.html page for this to work?