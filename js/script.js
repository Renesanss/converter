
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyToElement = document.querySelector(".js-currencyTo");
    const resultElement = document.querySelector(".js-result");
    const euroElement = document.querySelector(".js-euro");
    const usdElement = document.querySelector(".js-usd");
    const converterButtonElement = document.querySelector(".js-converterButton");
    const currencyElement = document.querySelector(".js-currency");
    
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    
    const select = currencyToElement.value;
    const input = amountElement.value;
    
    const convert = input / select;
    
    resultElement.innerText = convert.toFixed(2);
    
    
    
    currencyElement.innerText = currencyToElement.value === euroElement.value ? "EURO" : "USD";
    });
    


    

    

    
    
    
  
    
    
    
    });
    
    }
