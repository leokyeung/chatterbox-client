var Friends = {


  toggleStatus: function (name) {
    // if obj key = true
    name = name.trim();
    if ( Friends[name] ) {
      Friends[name] = false;
    } else {
      Friends[name] = true;
    }
  }
};

