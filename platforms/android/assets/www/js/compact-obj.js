_.mixin({
  compactObject: function(o) {
    _.each(o, function(v, k) {
      if (!v) {
        delete o[k];
      }
    });
    return o;
    asdasd
  }
});