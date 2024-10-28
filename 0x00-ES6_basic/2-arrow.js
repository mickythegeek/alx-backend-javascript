/* eslint new-cap: ["error", { "capIsNewExceptions": ["getNeighborhoodsList"] }] */

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

const neighbourhoods = new getNeighborhoodsList();
neighbourhoods.addNeighborhood('Ibadan');
console.log(neighbourhoods.sanFranciscoNeighborhoods);
