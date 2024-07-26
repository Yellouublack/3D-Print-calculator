function calculatePrice() {
    const technology = document.getElementById('technology').value;
    const material = document.getElementById('material').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    let materialPrice = parseFloat(document.getElementById('material-price').value);
    const materialPriceUnit = document.getElementById('material-price-unit').value;
    let materialUsed = parseFloat(document.getElementById('material-used').value);
    const materialUsedUnit = document.getElementById('material-used-unit').value;
    const currency = document.getElementById('currency').value;
    const laborCost = parseFloat(document.getElementById('labor-cost').value);
    const printTime = parseFloat(document.getElementById('print-time').value);
    const profitMargin = parseFloat(document.getElementById('profit-margin').value);
    const machineWattage = parseFloat(document.getElementById('machine-wattage').value);
    const electricityCost = parseFloat(document.getElementById('electricity-cost').value);

    if (isNaN(weight) || isNaN(materialPrice) || isNaN(materialUsed) || isNaN(laborCost) || isNaN(printTime) || isNaN(profitMargin) || isNaN(machineWattage) || isNaN(electricityCost)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Convert weights and prices to grams if needed
    if (weightUnit === "kg") {
        weight *= 1000;
    }
    if (materialPriceUnit === "kg") {
        materialPrice /= 1000;
    }
    if (materialUsedUnit === "kg") {
        materialUsed *= 1000;
    }

    // Calculate costs
    const materialCost = materialUsed * materialPrice;
    const laborCostTotal = laborCost * printTime;
    const profitAmount = (materialCost + laborCostTotal) * (profitMargin / 100);
    const electricityUsed = (machineWattage * printTime) / 1000; // kWh
    const electricityCostTotal = electricityUsed * electricityCost;
    const totalPrice = materialCost + laborCostTotal + profitAmount + electricityCostTotal;

    document.getElementById('result').innerText = `Estimated Price: ${currency}${totalPrice.toFixed(2)}`;
}
