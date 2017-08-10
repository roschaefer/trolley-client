import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  activePriorities: Ember.computed('sessionState.priorities', function() {
    return this.get('sessionState.priorities');
  }),

  cartItems: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems');
  }),

  remainingItems: Ember.computed('sessionState.shoppingListItems', 'sessionState.cartItems', function() {
    return this.get('sessionState.shoppingListItems').reject((i) => {
      return this.get('sessionState.cartItems').includes(i);
    }, 0);
  }),

  totalDistance: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((distance, item) => {
      return (distance + item.get('distance')).toFixed(0);
    }, 0);
  }),

  totalOrganic: Ember.computed('sessionState.cartItems', function() {
    return 0;
  }),

  totalSugar: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((sugar, item) => {
      return (sugar + item.get('sugar')).toFixed(1);
    }, 0);
  }),

  totalPrice: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((price, item) => {
      console.log(item);
      return (price + item.get('price')).toFixed(2);
    }, 0);
  }),

});
