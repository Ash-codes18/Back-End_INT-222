function prod(i) {
    while (i <= 10) {
      setTimeout(function() {
        console.log(i * 4);
      }, 2000 * i);
      i++;
    }
  }
  
  prod(1);
  