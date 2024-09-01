function calculateBMI() {
    const heightFeet = document.getElementById('height-feet').value;
    const heightInches = document.getElementById('height-inches').value;
    const weight = document.getElementById('weight').value;
  
    if (heightFeet === '' || heightInches === '' || weight === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Convert height to inches
    const totalInches = (parseFloat(heightFeet) * 12) + parseFloat(heightInches);
    
    // Convert height to meters
    const heightInMeters = totalInches * 0.0254;
    
    // Calculate BMI
    const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  
    // Optional: Provide BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    
    resultDiv.innerHTML += `<br>You are in the ${category} category.`;
  }
  