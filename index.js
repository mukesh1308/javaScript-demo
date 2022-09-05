// inline comment
/* 
    this is multiline comment
*/
//  variables
var a="my name is mukesh"
a="my name is kumar"
//! console.log(a);
let b=5;
const pi=3.14;
//! console.log(b+" "+pi);


// operator
let add=5+10;
let sub=100-a;
let mult=102*3;
let div=50/5;
//! console.log("add :"+add);
//! console.log("sub :"+sub);
//! console.log("mult :"+mult);
//! console.log("div :"+div);

let inc=10;
let dec=20;
//! console.log("before change :"+inc+" ,"+dec);
inc++;
dec--;
//! console.log("after change :"+inc+" ,"+dec);


let remainder=20%2;
//! console.log("reminder :"+remainder);

let num1=5;
let num2=10;
let num3=15;
let num4=100
num1+=2  //num1=num1+2
num2-=5  //num2=num2+5
num3*=2  //num3=num3*2
num4/=10 //num4=num4/10
//! console.log(num1)
//! console.log(num2)
//! console.log(num3)
//! console.log(num4)

/* escap char
\'
\"
\\
\n
\t
\r
\b
\f
*/
//! console.log("my name is mukesh kumar\n i like c++ \t i study ECE#\b ");

let firstName="mukesh";
let lastName="kumar";
let String_cont=firstName+" "+lastName;
console.log(String_cont);
let String_len=String_cont.length;
//! console.log(String_len);

//! console.log("first char is :"+String_cont[0]);
//! console.log("last char is :"+String_cont[String_len-1]);

let say=`my name is ${String_cont}`
//! console.log(say);



// array

var array=["john",32];
//! console.log(array);
//! console.log("first element :"+array[0]);

array.push("push1");
array.push("push2");
array.push("push3");
//! console.log(array);


let pop_data=array.pop();
//! console.log(array);
//! console.log(pop_data);

array.shift();
//! console.log(array);

array.unshift("unshift");
//! console.log(array);

function myFunction(){
    //! console.log("helo from myFunction");
}
myFunction();
myFunction();
myFunction();

function Sum(a,b){
    //! console.log(`sum of ${a} and ${b} is ${a+b}`);
}
Sum(10,30);
Sum(1,52);
Sum(19,34); 

function sum(a,b){
    return a+b;
}
//! console.log(sum(10,21));