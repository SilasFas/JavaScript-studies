window.document.getElementById('myButton').onclick = function () {

    const myCheckBox = window.document.getElementById('myCheckBox')
    const visaBtn = window.document.getElementById('visaBtn')
    const mastercardBtn = window.document.getElementById('mastercardBtn')
    const paypalBtn = window.document.getElementById('paypalBtn')

    if (myCheckBox.checked) {

        console.log('You are subscribed!')

    } else {

        console.log('You are NOT subscribed!')
    }

    if (visaBtn.checked) {
        console.log('You are paying with a VISA!')
    } else if (mastercardBtn.checked) {
        console.log('You are paying with a MASTERCARD!')
    } else if (paypalBtn.checked) {
        console.log('You are paying with PAYPAL!')
    } else {
        window.alert('[ERRO] Select a payment method!')
    }
}