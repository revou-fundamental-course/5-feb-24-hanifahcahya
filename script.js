document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const temperatureUnit = document.getElementById('temperatureUnit').value;

    let result;
    if (temperatureUnit === 'celcius') {
        result = (temperatureInput * 9/5) + 32;
        document.getElementById('result').innerHTML = `${temperatureInput} Celcius = ${result} Fahrenheit`;
    } else {
        result = (temperatureInput - 32) * 5/9;
        document.getElementById('result').innerHTML = `${temperatureInput} Fahrenheit = ${result} Celcius`;
    }
});
