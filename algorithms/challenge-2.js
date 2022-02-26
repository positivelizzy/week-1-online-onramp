function divisible(a) {
  var number =0;
  for (var i in a){
    if((i % 2 === 0) && i > 15 ){
      number++;
    }
  }
  return number;
}

module.exports = divisible
