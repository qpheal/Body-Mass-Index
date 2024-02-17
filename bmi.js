//Body Mass Index... 
// Measure of body fat based on height and weight

function bmi(weight, height){
    let bmiValue = weight / (height * height )
    if (bmiValue < 18.5){
        return "Your BMI value is "+ bmiValue + ". You are underweight"
    } else if (bmiValue >= 18.5 && bmiValue < 25){
        return "Your BMI value is "+ bmiValue + ". You are underweight"
    } 
}

const test = bmi(80, 2)
console.log(test)