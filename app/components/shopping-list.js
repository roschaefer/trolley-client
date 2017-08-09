import Ember from 'ember';

export default Ember.Component.extend({
  remainingItems: Ember.computed('state.cartItems', 'state.shoppingListItems', function() {
    return this.get('state.shoppingListItems').reject((i) => {
      return this.get('state.cartItems').includes(i);
    });
  })
});
