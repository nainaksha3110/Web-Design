function generateTable() {
    let num = Number(document.getElementById("num").value);
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("tableResult").innerHTML = output;
}