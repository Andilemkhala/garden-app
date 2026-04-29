// ============================================
// Garden Advice Application
// Provides gardening tips based on season
// and plant type for gardening enthusiasts
// ============================================

/**
 * Returns gardening advice based on the current season.
 * @param {string} season - The current season (e.g., "summer", "winter")
 * @returns {string} - Advice for the given season
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        // Summer advice: focus on watering and shade
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        // Winter advice: protect plants from cold temperatures
        return "Protect your plants from frost with covers.\n";
    } else {
        // Default advice when season is not recognised
        return "No advice for this season.\n";
    }
}

/**
 * Returns gardening advice based on the type of plant.
 * @param {string} plantType - The type of plant (e.g., "flower", "vegetable")
 * @returns {string} - Advice for the given plant type
 */
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        // Flower advice: encourage blooming with fertiliser
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        // Vegetable advice: monitor for pests
        return "Keep an eye out for pests!";
    } else {
        // Default advice when plant type is not recognised
        return "No advice for this type of plant.";
    }
}

/**
 * Combines season and plant advice into a single message.
 * @param {string} season - The current season
 * @param {string} plantType - The type of plant
 * @returns {string} - Combined gardening advice
 */
function getGardenAdvice(season, plantType) {
    let advice = "";
    // Get advice for the season and append to advice string
    advice += getSeasonAdvice(season);
    // Get advice for the plant type and append to advice string
    advice += getPlantAdvice(plantType);
    return advice;
}

// Define the current season and plant type
let season = "summer";
let plantType = "flower";

// Generate the gardening advice and display it in the console
let advice = getGardenAdvice(season, plantType);
console.log(advice);