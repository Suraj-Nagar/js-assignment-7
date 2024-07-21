class Temperature {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 32;
    }

    // Getter for Celsius
    get celsius() {
        return this._celsius;
    }

    // Setter for Celsius
    set celsius(value) {
        if (this._isValidTemperature(value)) {
            this._celsius = value;
            this._fahrenheit = this._toFahrenheit(value);
        } else {
            console.log('Invalid temperature value. Please enter a numeric value.');
        }
    }

    // Getter for Fahrenheit
    get fahrenheit() {
        return this._fahrenheit;
    }

    // Setter for Fahrenheit
    set fahrenheit(value) {
        if (this._isValidTemperature(value)) {
            this._fahrenheit = value;
            this._celsius = this._toCelsius(value);
        } else {
            console.log('Invalid temperature value. Please enter a numeric value.');
        }
    }

    // Convert Celsius to Fahrenheit
    _toFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Convert Fahrenheit to Celsius
    _toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Validate the temperature value
    _isValidTemperature(value) {
        return !isNaN(value) && isFinite(value);
    }
}

// Example usage
const temp = new Temperature();

console.log(`Initial Celsius: ${temp.celsius}°C`); // 0°C
console.log(`Initial Fahrenheit: ${temp.fahrenheit}°F`); // 32°F

temp.celsius = 25;
console.log(`Updated Celsius: ${temp.celsius}°C`); // 25°C
console.log(`Updated Fahrenheit: ${temp.fahrenheit}°F`); // 77°F

temp.fahrenheit = 77;
console.log(`Updated Fahrenheit: ${temp.fahrenheit}°F`); // 77°F
console.log(`Updated Celsius: ${temp.celsius}°C`); // 25°C

temp.celsius = 'invalid'; // Invalid temperature value. Please enter a numeric value.
temp.fahrenheit = 'invalid'; // Invalid temperature value. Please enter a numeric value.
