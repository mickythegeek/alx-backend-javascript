/* eslint new-cap: ["error", { "capIsNewExceptions": ["getNeighborhoodsList"] }] */
// Constructor function
function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Bind addNeighborhood method to this instance
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

// Export the constructor function as a CommonJS module
module.exports = getNeighborhoodsList;
