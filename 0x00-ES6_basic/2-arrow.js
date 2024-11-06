/* eslint new-cap: ["error", { "capIsNewExceptions": ["getNeighborhoodsList"] }] */
function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };
}

const neighbourhoods = getNeighborhoodsList();
console.log(neighbourhoods.addNeighborhood('Taiwan'));
