function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = 
		"If you deposit <b>"+principal+"</b>,<br\>at an interest rate of <b>"+rate+"</b>%,<br\>You will receive an amount of <b>"+interest+"</b><br\>in the year <b>"+yearInTheFuture+"</b>.<br\>";
}

//update ther ate value
function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}