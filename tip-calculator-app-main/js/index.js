var tip5 = document.getElementById('tip5');
var tip10 = document.getElementById('tip10');
var tip15 = document.getElementById('tip15');
var tip25 = document.getElementById('tip25');
var tip50 = document.getElementById('tip50');
var custom = document.getElementById('custom-tip');
var btnReset = document.querySelector("#btn-reset");

function toggleInputError(e) {
    e.preventDefault();
    
    var people = document.getElementById('number-people').value;
    var bill = document.getElementById('bill').value;
    var tipAmount = document.querySelector("#tip-amount");
    var total = document.querySelector("#total");

    if (people <= 0 || people == '') {
        document.querySelector('#error-people').style.display = "block";
        tipAmount.textContent = "$0.00";
        total.textContent = "$0.00";
    } else {
        document.querySelector('#error-people').style.display = "none";
    }
    if (bill <= 0 || bill == '') {
        document.querySelector('#error-bill').style.display = "block";
        tipAmount.textContent = "$0.00";
        total.textContent = "$0.00";
    } else {
        document.querySelector('#error-bill').style.display = "none";
    }
}

function changeButtonColor() {
    tip5.classList.toggle("active");
    btnReset.classList.toggle("active");
}

tip5.addEventListener("click", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    
    var calcAmount = parseFloat((bill * 0.05) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;
    
    toggleInputError(e);
})

tip10.addEventListener("click", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    
    var calcAmount = parseFloat((bill * 0.10) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;

    toggleInputError(e);
})

tip15.addEventListener("click", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    
    var calcAmount = parseFloat((bill * 0.15) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;

    toggleInputError(e);
})

tip25.addEventListener("click", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    
    var calcAmount = parseFloat((bill * 0.25) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;

    toggleInputError(e);
})

tip50.addEventListener("click", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    
    var calcAmount = parseFloat((bill * 0.5) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;

    toggleInputError(e);
})

custom.addEventListener("change", function(e) {
    e.preventDefault();

    var bill = document.getElementById('bill').value;
    var people = document.getElementById('number-people').value;
    var customTip = document.getElementById('custom-tip').value;
    
    var calcAmount = parseFloat((bill * (customTip / 100)) / people).toFixed(2);
    var tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$" + calcAmount;

    var totalBill = parseFloat((bill / people) + parseFloat(calcAmount)).toFixed(2);
    var total = document.getElementById('total');
    total.textContent = "$" + totalBill;
    
    toggleInputError(e)
})

btnReset.addEventListener("click", () => {

    tipAmount = document.querySelector("#tip-amount");
    tipAmount.textContent = "$0.00";
    total = document.querySelector("#total");
    total.textContent = "$0.00";
    bill = document.getElementById('bill');
    bill.value = "";
    people = document.getElementById('number-people');
    people.value = "";
    custom = document.getElementById('custom-tip');
    custom.value = "";
})
