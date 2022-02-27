function noOfElements(x, y, z) {
 let count =0;
  for (var i in x){
    if(i>=y && i<=z) count++;
  }
  return count;
}
module.exports = noOfElements
