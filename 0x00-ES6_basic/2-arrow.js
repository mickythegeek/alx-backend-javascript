/* eslint new-cap: ["error", { "capIsNewExceptions": ["getNeighborhoodsList"] }] */
function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };
  return { sanFranciscoNeighborhoods, addNeighborhood };
}

const neighbourhoods = getNeighborhoodsList();
console.log(getNeighborhoodsList.addNeighborhood("Ibadan"));
