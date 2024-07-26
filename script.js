function calculatePrice() {
    const materialPrice = parseFloat(document.getElementById('material-price').value);
    const materialPriceUnit = document.getElementById('material-price-unit').value;
    const materialUsed = parseFloat(document.getElementById('material-used').value);
    const materialUsedUnit = document.getElementById('material-used-unit').value;
    const currency = document.getElementById('currency').value;
    const laborCost = parseFloat(document.getElementById('labor-cost').value);
    const laborCostUnit = document.getElementById('labor-cost-unit').value;
    const printTime = parseFloat(document.getElementById('print-time').value);
    const printTimeUnit = document.getElementById('print-time-unit').value;
    const profitMargin = parseFloat(document.getElementById('profit-margin').value);
    const machineWattage = parseFloat(document.getElementById('machine-wattage').value);
    const electricityCost = parseFloat(document.getElementById('electricity-cost').value);

    // Convert material price and used weight to grams if in kg
    const materialPricePerGram = materialPriceUnit === 'kg' ? materialPrice / 1000 : materialPrice;
    const materialUsedInGrams = materialUsedUnit === 'kg' ? materialUsed * 1000 : materialUsed;

    // Calculate material cost
    const materialCost = materialPricePerGram * materialUsedInGrams;

    // Convert print time to hours if in minutes
    const printTimeInHours = printTimeUnit === 'minute' ? printTime / 60 : printTime;

    // Calculate labor cost
    const laborCostTotal = laborCostUnit === 'minute' ? laborCost * printTimeInHours * 60 : laborCost * printTimeInHours;

    // Calculate electricity cost
    const electricityUsed = (machineWattage * printTimeInHours) / 1000; // kWh
    const electricityCostTotal = electricityUsed * electricityCost;

    // Calculate total cost
    const totalCost = materialCost + laborCostTotal + electricityCostTotal;

    // Apply profit margin
    const finalPrice = totalCost * (1 + profitMargin / 100);

    // Display the result
    document.getElementById('result').innerHTML = `Total Cost: ${currency}${finalPrice.toFixed(2)}`;
}
