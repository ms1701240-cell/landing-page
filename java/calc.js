var num1=+window.prompt('enter num1');
var num2=+window.prompt('enter num2');
var op = window.prompt('enter op')
switch (op){
    case '+':
        console.log(num1 +num2);
        break

}
var sum=(num1+num2);
var sub=(num1-num2);
var div=(num1/num2);
var py=(num1*num2);
console.log(sum);
console.log(sub);
console.log(div);
console.log(py);


var juany=1;
var feb=2;
var march=3;
var april=4;
var may=5;
var june=6;
var july=7;
var agu=8;
var sept=9;
var oct=10;
var nov=11;
var dec=12;



if(juany==1||march==2||may==5||july==7||agu==8||oct==10||dec==12){
    console.log('31')
}
else if(april==4||june==6||sept==9||nov||11){
    console.log('30')
}
else{
    console.log('29/28')
}