//Body Mass Index... 
// Measure of body fat based on height and weight

function bmi(weight, height){
    let bmiValue = weight / (height * height )
    if (bmiValue >= 0 && bmiValue < 18.5){
        return "Your BMI value is "+ bmiValue + ". You are underweight"
    } else if (bmiValue >= 18.5 && bmiValue < 25){
        return "Your BMI value is "+ bmiValue + ". You have a normal weight"
    } else if (bmiValue >= 25 && bmiValue < 30){
        return "Your BMI value is "+ bmiValue + ". You are overweight"
    } else if (bmiValue >= 30 && bmiValue < 40){
        return "Your BMI value is "+ bmiValue + ". You have obesity"
    }  else (bmiValue >= 40)
        return "Your BMI value is "+ bmiValue + ". You have severe obesity"
    } 


const test = bmi(90, 1.2)
console.log(test)