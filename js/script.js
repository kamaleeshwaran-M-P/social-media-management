const btn=document.getElementsByClassName('btn')[0];
const navbar=document.getElementsByClassName('navbar-link')[0];

 btn.addEventListener('click',()=>{
     navbar.classList.toggle('active');
 });
//number scroll
let f90=document.getElementById("90");
let i=0;
let inter1=setInterval(()=>{
    f90.innerHTML=`${i}%`;
    i++;
    if(i==91)
        stopInter1();
},15);

let f10=document.getElementById("10");
let j=0;
let inter2=setInterval(()=>{
    f10.innerHTML=`${j}+`;
    j++;
    if(j==11)
        stopInter2();
},150);

let f30=document.getElementById("30");
let k=0;
let inter3=setInterval(()=>{
    f30.innerHTML=`${k}+`;
    k++;
    if(k==31)
        stopInter3();
},50);

function stopInter1()
{
    clearInterval(inter1);
}

function stopInter2()
{
    clearInterval(inter2);
}

function stopInter3()
{
    clearInterval(inter3);
}