const seedrandom = require("seedrandom");
const UserAgents = require("./user-agents.json");
/**
 * @param {string|undefined} string
 */
function getSeed(string) {
  const rng = seedrandom(string);
  return rng();
}
/**
 * @param {string|undefined} string
 */
function getUserAgent(string) {
  const seed = getSeed(string);
  return UserAgents[Math.round(seed * (UserAgents.length - 1))].userAgent;
}
module.exports = getUserAgent;
