// src/dataProcessor.js

// Function to calculate average yield and average area for each crop
export const calculateAverages = (data) => {
    const averages = {};

    data.forEach(item => {
        const cropName = item["Crop Name"];
        const yieldKgHa = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
        const areaHa = parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]);

        if (!averages[cropName]) {
            averages[cropName] = {
                totalYield: 0,
                totalCount: 0,
                totalArea: 0
            };
        }

        if (!isNaN(yieldKgHa)) {
            averages[cropName].totalYield += yieldKgHa;
            averages[cropName].totalCount++;
        }

        if (!isNaN(areaHa)) {
            averages[cropName].totalArea += areaHa;
        }
    });

    // Calculate averages
    for (const cropName in averages) {
        averages[cropName].avgYield = averages[cropName].totalCount > 0 ? averages[cropName].totalYield / averages[cropName].totalCount : 0;
        averages[cropName].avgArea = averages[cropName].totalArea / data.length; // Assuming total number of records is used for average area
    }

    return averages;
};
