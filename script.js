console.log("HI")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let para = document.getElementById("para")

let sum=0;
increase.addEventListener("click",function add(){
    sum=sum+1
    para.innerHTML=sum
})
decrease.addEventListener("click",function add(){
    sum=sum-1
    para.innerHTML=sum
})