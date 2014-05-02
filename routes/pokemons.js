IVBook.PokemonsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('pokemon');
  }
});
