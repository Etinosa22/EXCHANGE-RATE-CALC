const currencyOne = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amountTwo = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

let calc = () => {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    let myApiKey = "395d8097baee1e01c4fd7502";

    fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/latest/${currency_one}`)
    .then( res => res.json())
    .then(data => {
        console.log(data)

        const rate = data.conversion_rates[currency_two]
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amountTwo.value = (amountOne.value * rate).toFixed(2)
    })
}

currencyOne.addEventListener('change', calc)
amountOne.addEventListener('input', calc)
currencyTwo.addEventListener('change', calc)
amountTwo.addEventListener('change', calc)

swap.addEventListener('click', () => {
    const temp = currencyOne.value

    currencyOne.value = currencyTwo.value
    currencyTwo.value = temp

    calc()


})

calc();