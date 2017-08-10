import Ember from 'ember';

export default Ember.Controller.extend({
  sessionState: Ember.inject.service(),
  remainingItems: Ember.computed('sessionState.shoppingListItems', 'sessionState.cartItems', function() {
    return this.get('sessionState.shoppingListItems').reject((i) => {
      return this.get('sessionState.cartItems').includes(i);
    });
  })
});
