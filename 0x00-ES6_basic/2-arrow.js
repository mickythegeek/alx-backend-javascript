export const getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood =  function add(newNeighborhood) {
    return self.sanFranciscoNeighborhoods.push(newNeighborhood);
  };
};


