// src/dataProcessor.js

export const processData = (data) => {
    const result = [];

    // Grouping data by year
    const groupedByYear = data.reduce((acc, curr) => {
        const year = curr.Year.match(/\d{4}/)[0]; // Extract the year
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(curr);
        return acc;
    }, {});

    // Processing each year
    for (const year in groupedByYear) {
        const crops = groupedByYear[year].filter(crop => crop["Crop Production (UOM:t(Tonnes))"]);
        if (crops.length === 0) continue;

        const maxProduction = Math.max(...crops.map(crop => parseFloat(crop["Crop Production (UOM:t(Tonnes))"])));
        const minProduction = Math.min(...crops.map(crop => parseFloat(crop["Crop Production (UOM:t(Tonnes))"])));

        const maxProductionCrops = crops
            .filter(crop => parseFloat(crop["Crop Production (UOM:t(Tonnes))"]) === maxProduction)
            .map(crop => crop["Crop Name"]);

        const minProductionCrops = crops
            .filter(crop => parseFloat(crop["Crop Production (UOM:t(Tonnes))"]) === minProduction)
            .map(crop => crop["Crop Name"]);

        result.push({
            Year: year,
            MaxProductionCrop: maxProductionCrops.join(", "),
            MinProductionCrop: minProductionCrops.join(", ")
        });
    }

    return result;
};

