function add(){
    let v1=Number(document.getElementById("val1").value)
    let v2=Number(document.getElementById("val2").value)
    let add1=v1+v2
    let re=document.getElementById("result")
    re.innerHTML="Ans:  "+add1
    event.preventDefault();
}
function sub(){
    let v1=Number(document.getElementById("val1").value)
    let v2=Number(document.getElementById("val2").value)
    let sub=v1-v2
    let re=document.getElementById("result")
    re.innerHTML="Ans:  "+sub
    event.preventDefault();
}
function mul(){
    let v1=Number(document.getElementById("val1").value)
    let v2=Number(document.getElementById("val2").value)
    let mul=v1*v2
    let re=document.getElementById("result")
    re.innerHTML="Ans:  "+mul
    event.preventDefault();
}
function div(){
    let v1=Number(document.getElementById("val1").value)
    let v2=Number(document.getElementById("val2").value)
    let div=v1/v2
    let re=document.getElementById("result")
    re.innerHTML="Ans:  "+div
    event.preventDefault();
}