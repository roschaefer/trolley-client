import Ember from 'ember';

export default Ember.Route.extend({
  sessionState: Ember.inject.service(),
  products: Ember.inject.service(),
  beforeModel(){
    this.get('sessionState').set('shoppingListItems', this.get('products').all());
  },
});
