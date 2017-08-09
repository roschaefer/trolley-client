import Ember from 'ember';

export default Ember.Component.extend({
  remainingItems: Ember.computed('state.cartItems', 'state.shoppingListItems', function() {
    if (!this.get('state')) { return [] }
    return this.get('state.shoppingListItems').reject((i) => {
      return this.get('state.cartItems').includes(i);
    });
  })
});
