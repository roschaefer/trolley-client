import Ember from 'ember';

export default Ember.Route.extend({
  sessionState: Ember.inject.service(),
  beforeModel(){
    this.store.findAll('product').then((products) => {
      this.get('sessionState').set('shoppingListItems', products);
    });
  },
});
