var Friends = {


  toggleStatus: function (name) {
    // if obj key = true
    if ( Friends[name] ) {
      Friends[name] = false;
    } else {
      Friends[name] = true;
    }
  }
};

