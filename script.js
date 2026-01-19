const factors = {
  meters: 1,
  feet: 3.28084
};

function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(value)) {
    document.getElementById("result").textContent = "";
    return;
  }

  const valueInMeters = value / factors[from];
  const result = valueInMeters * factors[to];

  document.getElementById("result").textContent = result.toFixed(4);
}

document.getElementById("inputValue").addEventListener("input", convert);
document.getElementById("fromUnit").addEventListener("change", convert);
document.getElementById("toUnit").addEventListener("change", convert);