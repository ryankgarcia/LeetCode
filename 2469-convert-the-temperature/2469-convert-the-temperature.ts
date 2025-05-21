function convertTemperature(celsius: number): number[] {
    const returnArr: number[] = []
    const kelvin: number = celsius + 273.15;
    const fahrenheit: number = (celsius * 1.80) + 32.00
    returnArr.push(kelvin);
    returnArr.push(fahrenheit);
    return returnArr
};