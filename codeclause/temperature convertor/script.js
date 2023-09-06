document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const celsiusToFahrenheitRadio = document.getElementById("celsiusToFahrenheit");
    const fahrenheitToCelsiusRadio = document.getElementById("fahrenheitToCelsius");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            alert("Please enter a valid number.");
            return;
        }

        let convertedTemperature;
        if (celsiusToFahrenheitRadio.checked) {
            convertedTemperature = (temperature * 9/5) + 32;
            resultText.innerText = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        } else if (fahrenheitToCelsiusRadio.checked) {
            convertedTemperature = (temperature - 32) * 5/9;
            resultText.innerText = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        }
    });
});
