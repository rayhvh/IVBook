IVBook.Router.map(function() {
  this.resource('pokemons', function() {
    this.resource('pokemon', { path: ':pokemon_id' });
  });
});
