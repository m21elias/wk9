var a = "1"
var b = "-1"

console.log(a - b);

var foo = function foo() {
    console.log(foo === foo); 
    };
    foo();



var array = ['sea', 'woods', 'desert', 'mountain', 'space']

console.log(array.length)

for(i=0; i<array.length; i++){
    console.log(array[i].length)
}

array.reverse();
console.log(array);

var numberArray =  [1,2,3,4,5]

console.log(numberArray)

numberArray.reverse();
console.log(numberArray);


//three strings
var stringTwo = ['lipstick', 'foundation','blush'];

//adding index to array
stringTwo.push('highlighter','lashes');
console.log(stringTwo)

//removing to array
stringTwo.shift();
console.log(stringTwo);