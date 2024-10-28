function GetNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

const neighbourhoods = new GetNeighborhoodsList();
neighbourhoods.addNeighborhood('Ibadan');
console.log('Results: ', neighbourhoods.sanFranciscoNeighborhoods);
