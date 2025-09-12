/**
 * Simple utility function for demonstration
 * @param {string} day - The day of the week
 * @returns {boolean} - True if it's Friday
 */
function isFriday(day) {
  return day.toLowerCase() === 'friday';
}

/**
 * Get today's excitement level
 * @param {string} day - The current day
 * @returns {string} - Excitement message
 */
function getExcitementLevel(day) {
  if (isFriday(day)) {
    return 'It\'s Friday! 🎉 Time to celebrate!';
  }
  return `It's ${day}. Still waiting for Friday...`;
}

module.exports = {
  isFriday,
  getExcitementLevel
};