// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
b is a type array but a is a string array.

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i = 0; i < a.length; i++){
a[i] *= 2;
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];

//TODO case 1 output: 'Red Green White Black'
var string = "";
for(let i = 0; i < colors.length-1; i++){
string += colors[i].concat(" ")
}
string += colors[colors.length-1];
console.log("'"+string+"'");

// case 2 output: 'Red+Green+White+Black'
var string = "";
for(let i = 0; i < colors.length-1; i++){
string += colors[i].concat("+")
}
string += colors[colors.length-1];
console.log("'"+string+"'");

// case 3 output: 'Red,Green,White,Black'
console.log("'"+colors.toString()+"'");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

for(let i = 0; i < a.length-1; i++){
if(a[i]<a[i+1]) {
var temp = a[i];
a[i] = a[i+1];
a[i+1] = temp;
i = -1;
}
}
console.log("[" + a.toString() + "]");

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var array = [];
for(let i = 0; i < a.length-1; i++){
    if(!array.includes(a[i])){
    array.push(a[i])
    }
}

var char = '';
var counter = 0;
for(let i = 0; i < array.length-1; i++){
var temp = 0;
    for(let h = 0; h < a.length-1; h++){
        if(array[i]===a[h]){
        temp++;
        }
    }
    if(temp > counter) {
        char = array[i];
        counter = temp
    }
}
console.log(char);