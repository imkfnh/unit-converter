const conversionRates = {
  teaspoons: 1,
  tablespoons: 3,
  ounces: 6,
  cups: 48,
  pints: 96,
  quarts: 192,
  gallons: 768
};

function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "";
    return;
  }

  const valueInTeaspoons = inputValue * conversionRates[fromUnit];
  const convertedValue = valueInTeaspoons / conversionRates[toUnit];

  document.getElementById("result").textContent = convertedValue;
}