/* eslint new-cap: ["error", { "capIsNewExceptions": ["getNeighborhoodsList"] }] */
function getNeighborhoodsList() {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };
  return { sanFranciscoNeighborhoods, addNeighborhood };
}

const neighbourhoods = getNeighborhoodsList();
console.log(neighbourhoods.addNeighborhood('Taiwan'));
