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