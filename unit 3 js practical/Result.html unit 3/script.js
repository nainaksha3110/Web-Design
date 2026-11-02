function calculateResult() {
    let science =Number(document.getElementById("science").value);
    let maths = Number(document.getElementById("maths").value);
    let english = Number(document.getElementById("english").value);
let total = science + maths + english;
let percentage = (total/300)*100;
let result="";
if (science >= 40 && maths >= 40 && english >= 40){
    result="Pass";
} else{
    result="Fail;"
}
document.getElementById("total").innerHTML= total;
document.getElementById("percentage").innerHTML= percentage;
document.getElementById("result").innerHTML= result;
}
