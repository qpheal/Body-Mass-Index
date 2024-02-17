//Body Mass Index... 
// Measure of body fat based on height and weight

function bmi(weight, height){
    let bmiValue = weight / (height * height )
    if (bmiValue < 18.5){
        console.log("Your BMI value is ", bmiValue, ". You are underweight")
    }
}

const test = bmi(75, 3)

console.log(test)