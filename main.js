const ratioUsdToVnd = 23400.5;
const ratioKrwToVnd = 19.11;
const ratioGbpToVnd = 28823.12;
const ratioEurToVnd = 25324.72;
const ratioUsdToKrw = 1224.22;
const ratioGbpToUsd = 1.23;
const ratioEurToUsd = 1.08;
const ratioEurToKrw = 1324.50;
const ratioGbpToKrw = 1509.84;
const ratioGbpToEur = 1.14;
let from = document.getElementById("fromList")
let to = document.getElementById("toList")
let amount = document.getElementById("amountInput")
let result = document.getElementById("resultArea")
let convertedAmount  = 0
let formatamount =''

function vndToUsd(){ 
    return amount.value /  ratioUsdToVnd 
}

function usdToVnd(){
    return amount.value * ratioUsdToVnd
}

function krwToVnd(){
    return amount.value * ratioKrwToVnd
}

function vndToKrw(){
    return amount.value / ratioKrwToVnd
}

function gbpToVnd(){
    return amount.value * ratioGbpToVnd
}

function vndToGbp(){
    return amount.value / ratioGbpToVnd
}

function eurToVnd(){
    return amount.value * ratioEurToVnd
}

function vndToEur(){
    return amount.value / ratioEurToVnd
}

function usdToKrw(){
    return amount.value * ratioUsdToKrw
}

function krwToUsd(){
    return amount.value / ratioUsdToKrw
}

function gbpToUsd(){
    return amount.value * ratioGbpToUsd;
}

function usdToGbp(){
    return amount.value / ratioGbpToUsd;
}

function eurToUsd(){
    return amount.value * ratioEurToUsd;
}

function usdToEur(){
    return amount.value / ratioEurToUsd;
}

function eurToKrw(){
    return amount.value * ratioEurToKrw;
}

function krwToEur(){
    return amount.value / ratioEurToKrw;
}

function gbpToKrw(){
    return amount.value * ratioGbpToKrw;
}

function krwToGbp(){
    return amount.value / ratioGbpToKrw;
}

function gbpToEur(){
    return amount.value * ratioGbpToEur;
}

function eurToGbp(){
    return amount.value / ratioGbpToEur;
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

function convert () {


    if(from.value === "VND" & to.value === 'USD'){
        convertedAmount = vndToUsd()
       
    }else if(from.value === "USD" && to.value === "VND"){
        convertedAmount = usdToVnd()

    }else if(from.value === "VND" && to.value === "KRW"){
        convertedAmount = vndToKrw()

    }else if(from.value === "KRW" && to.value === "VND"){
        convertedAmount = krwToVnd()

    }else if(from.value === "VND" && to.value === "GBP"){
        convertedAmount = vndToGbp()

    }else if(from.value === "GBP" && to.value === "VND"){
        convertedAmount = gbpToVnd()

    }else if(from.value === "VND" && to.value === "EUR"){
        convertedAmount = vndToEur()

    }else if(from.value === "EUR" && to.value === "VND"){
        convertedAmount = eurToVnd()

    }else if(from.value === "USD" && to.value === "KRW"){
        convertedAmount = usdToKrw()

    }else if(from.value === "KRW" && to.value === "USD"){
        convertedAmount = krwToUsd()

    }else if(from.value === "GBP" && to.value === "USD"){
        convertedAmount = gbpToUsd()

    }else if(from.value === "USD" && to.value === "GBP"){
        convertedAmount = usdToGbp()

    }else if(from.value === "EUR" && to.value === "USD"){
        convertedAmount = eurToUsd()

    }else if(from.value === "USD" && to.value === "EUR"){
        convertedAmount = usdToEur()

    }else if(from.value === "EUR" && to.value === "KRW"){
        convertedAmount = eurToKrw()

    }else if(from.value === "KRW" && to.value === "EUR"){
        convertedAmount = krwToEur()

    }else if(from.value === "GBP" && to.value === "KRW"){
        convertedAmount = gbpToKrw()

    }else if(from.value === "KRW" && to.value === "GBP"){
        convertedAmount = krwToGbp()

    }else if(from.value === "GBP" && to.value === "EUR"){
        convertedAmount = gbpToEur()

    }else if(from.value === "EUR" && to.value === "GBP"){
        convertedAmount = eurToGbp()
    }
    formatamount = formatCurrency(to.value,convertedAmount) 
    result.innerHTML = `Result is ${formatamount}`
}
