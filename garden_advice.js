// Garden Advice Application
// This app provides gardening tips based on the season and plant type

// Function to get advice based on the season
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

// Function to get advice based on the plant type
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Main function that combines season and plant advice
function getGardenAdvice(season, plantType) {
    let advice = "";
    advice += getSeasonAdvice(season);
    advice += getPlantAdvice(plantType);
    return advice;
}

// Hardcoded values for season and plant type
let season = "summer";
let plantType = "flower";

// Generate and display the gardening advice
let advice = getGardenAdvice(season, plantType);
console.log(advice);