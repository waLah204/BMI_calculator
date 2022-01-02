let feet = document.getElementById('feed')
let inches = document.getElementById('inches')
let pounds = document.getElementById('pounds')
let result
let result_text = document.getElementById('BMI-result-text')
let toggleButton = document.getElementById('toggle')
let checkBox = document.getElementById('checkBox')


toggleButton.addEventListener("change", ()=>{
    feet.value = ""
    inches.value = ""
    pounds.value = ""
    result_text.innerHTML = ""
    document.getElementById('BMI-result').innerHTML = ""
    if(checkBox.checked===true){
        document.getElementById('modelExpression').innerHTML = "(Metric)"
        document.getElementById('feetLabel').innerHTML = "Meter"
        document.getElementById('inchesLabel').innerHTML = "Centimeters"
        document.getElementById('poundsLabel').innerHTML = "Kelograms"
    } else {
        document.getElementById('modelExpression').innerHTML = "(Standard)"
        document.getElementById('feetLabel').innerHTML = "Feet"
        document.getElementById('inchesLabel').innerHTML = "Inches"
        document.getElementById('poundsLabel').innerHTML = "Pounds"
    }

})

function compute_BMI() {
    if(checkBox.checked===true){
        computeWithMetric()
        resultText()
    } else {
        computeWithStandard()
        resultText()
    }
}

function computeWithStandard() {
    let finalInches = Math.pow(parseFloat(feet.value) * 12 + parseFloat(inches.value),2)
    result = (parseFloat(pounds.value) / finalInches * 703).toFixed(2)
    document.getElementById('BMI-result').innerHTML = "Result: " + result
}
function computeWithMetric() {
    let finalMeters = Math.pow(parseFloat(feet.value) + (parseFloat(inches.value)/100),2)
    result = (parseFloat(pounds.value) / finalMeters).toFixed(2)
    document.getElementById('BMI-result').innerHTML = "Result:" + result
}

document.querySelector("#result-btn-btn").addEventListener('click', compute_BMI)

function resultText() {
    if (result < 18.5) {
        result_text.innerHTML = 'You are under weight. Eat enough of healthy diet.'
    } else if (result >= 18.5 && result <= 24.9) {
        result_text.innerHTML = 'Your weight is normal. Maintain your healthy weight.'
    } else if (result >= 25 && result <= 29.9) {
        result_text.innerHTML = 'Your are over weight. Do a diet plan and physical activity.'
    } else if (result >= 30) {
        result_text.innerHTML = 'Obesity! Eat a heart-healthy diet. Increase physical activity.'
    }
    
}