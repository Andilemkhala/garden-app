// ============================================
// Garden Advice Application
// Provides gardening tips based on season
// and plant type for gardening enthusiasts
// ============================================

// Constants for valid season values - using these instead of raw strings
// throughout the file means a typo becomes a clear reference error rather
// than a silent "no advice found" fallback.
const SEASONS = {
    SUMMER: "summer",
    WINTER: "winter"
};

// Constants for valid plant type values, for the same reason as above.
const PLANT_TYPES = {
    FLOWER: "flower",
    VEGETABLE: "vegetable"
};

/**
 * Returns gardening advice based on the current season.
 * @param {string} season - The current season (e.g., "summer", "winter")
 * @returns {string} - Advice for the given season
 */
function getSeasonAdvice(season) {
    if (season === SEASONS.SUMMER) {
        // Summer advice: focus on watering and shade
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === SEASONS.WINTER) {
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
    if (plantType === PLANT_TYPES.FLOWER) {
        // Flower advice: encourage blooming with fertiliser
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === PLANT_TYPES.VEGETABLE) {
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

// Define the current season and plant type using the constants above,
// instead of raw string literals.
let season = SEASONS.SUMMER;
let plantType = PLANT_TYPES.FLOWER;

// Generate the gardening advice and display it in the console
let advice = getGardenAdvice(season, plantType);
console.log(advice);