const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const lengthValue = document.getElementById("length-value");
const volumeValue = document.getElementById("volume-value");
const massValue = document.getElementById("mass-value");
let inputValue;

inputBtn.addEventListener("click", function(){
    if(inputValue <= 0){
        alert("Invalid Input!");
        inputEl.value = 1;
    }else{
    inputValue = inputEl.value
    calculateConversions(inputEl.value);
}
})

function calculateConversions(unitValue){
    const feet = (unitValue * 3.281).toFixed(3);
    const meter = (unitValue / 3.281).toFixed(3);
    const gallon = (unitValue / 3.785).toFixed(3); 
    const liter = (unitValue * 3.785).toFixed(3);
    const kilo = (unitValue / 2.205).toFixed(3);
    const pound = (unitValue * 2.205).toFixed(3);
    lengthValue.textContent = `${inputValue} meter = ${feet} feet | ${inputValue} feet = ${meter} meter`;
    volumeValue.textContent = `${inputValue} liter = ${gallon} gallon | ${inputValue} gallon = ${liter} liters`;
    massValue.textContent = `${inputValue} kilo = ${pound} pounds | ${inputValue} pound = ${kilo} kilo`;
}
