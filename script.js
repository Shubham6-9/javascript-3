function q1(){
    console.log("-------------------Question 1-------------------");
    for(let a=1 ; a<=20 ; a++){
        console.log(a);
    }
}
function q2(){
    console.log("-------------------Question 2-------------------");
    for(let a=2 ; a<50 ; a++){
        if(a%2!=0)
            console.log(a)
    }
}
function q3(){
    console.log("-------------------Question 3-------------------");
    for(let a=10 ; a>=1 ; a--){
        console.log(a);
    }
}
function q4(){
    console.log("-------------------Question 4-------------------");
    for(let a=1 ; a<=10 ; a++){
        console.log(a+" = "+a*a);
    }
}
function q5(){
    console.log("-------------------Question 5-------------------");
    for(let i=1 ; i<=30 ; i++){
        if(i%3==0)
            console.log(i)
    }
}
function q6(){
    console.log("-------------------Question 6-------------------");
    let sum=0
    for(let a=1 ; a<=5 ; a++){
        sum+=a;
    }
    console.log(sum)
}
function q7(){
    console.log("-------------------Question 7-------------------");
    let a=document.getElementById("7").value
    let arr=[]
    for(let i=0 ; i<a.length ; i++){
        arr[i]= a[i]
    }
    document.getElementById("7-ans").innerHTML = `${arr}`
}
function q8(){
    console.log("-------------------Question 8-------------------");
    let a=document.getElementById("8").value
    for(let i=0 ; i<a.length ; i++){
        if(a[i]!=',' && a[i]!='[' && a[i]!=']'){
            console.log(a[i])
        }
    }
}
function q9(){
    console.log("-------------------Question 9-------------------");
    for(let a=1 ; a<=20 ; a++){
        console.log(a)
        if(a==5){
            break;
        }
    }
}
function q10(){
    console.log("-------------------Question 10-------------------");
    let sum=0
    for(let a=1 ; a<=20 ; a++){
        if(a%2==0){
            sum+=a;
        }
    }
    console.log(sum);
}
function wq1(){
    console.log("-------------------While Question 1-------------------");
    let i=1
    while(i<=10){
        console.log(i)
        i++
    }
}
function wq2(){
    console.log("-------------------While Question 2-------------------");
    let i=5
    while(i<=15){
        console.log(i)
        i++
    }
}
function wq3(){
    console.log("-------------------While Question 3-------------------");
    let i=1
    while(i<=10){
        if(i%2==0)
            console.log(i)
        i++
    }
}
function wq4(){
    console.log("-------------------While Question 4-------------------");
    let i=1
    while(i<=5){
        console.log(i*4)
        i++
    }
}
function wq5(){
    console.log("-------------------While Question 5-------------------");
    let i=1
    let sum=0;
    while(sum<50){
        sum+=i
        if(sum<50){
            console.log(i)
        }
        i++
    }
}
function dq1(){
    console.log("-------------------Do While Question 1-------------------");
    let i=1
    do{
        console.log(i)
        i++
    }while(i<=5);
}
function dq2(){
    console.log("-------------------Do While Question 2-------------------");
    let i=1
    do{
        console.log(i)
        i++
    }while(i<=10);
}
function dq3(){
    console.log("-------------------Do While Question 3-------------------");
    let i=1
    do{
        if(i%2!=0){
        console.log(i)
        }
        i++
    }while(i<=15);
}
function dq4(){
    console.log("-------------------Do While Question 4-------------------");
    let i=1
    do{
        if(i<100){
            console.log(i)
        }
        i*=2
    }while(i<100);
}
function dq5(){
    console.log("-------------------Do While Question 5-------------------");
    let a=String(document.getElementById("d5").value)
    let i=0
    let b=[];
    do{
        b[i]=a[i]
        i++
    }while(i<a.length);
    document.getElementById("d5-ans").innerHTML = `${b}`;
}