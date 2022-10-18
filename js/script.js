let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyToElement = document.querySelector(".js-currencyTo");
let resultElement = document.querySelector(".js-result");
let euroElement = document.querySelector(".js-euro");
let usdElement = document.querySelector(".js-usd");
let converterButtonElement = document.querySelector(".js-converterButton");
let currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let select = currencyToElement.value;
let input = amountElement.value;

let convert = input / select;

resultElement.innerText = convert.toFixed(2);



currencyElement.innerText = currencyToElement.value === euroElement.value ? "EURO" : "USD";
});