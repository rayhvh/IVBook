IVBook.Router.map(function() {
  this.resource('pokemons', { path: '/' }, function() {
    this.resource('pokemon', { path: ':pokemon_id' }, function() {
      this.route('edit');
    });
  });
});
