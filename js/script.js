{
    const calculateResult = () => {
    const amountElement = document.querySelector(".js-amount");
    const currencyToElement = document.querySelector(".js-currencyTo");

    const select = currencyToElement.value;
    const input = amountElement.value;

    return input / select;
};

const init = () => {
 
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateResult();
        const result = calculateResult();
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    });
};
init();
}










