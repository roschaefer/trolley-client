import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  products: Ember.inject.service(),

  visibleProducts: Ember.computed(function() {
    return this.get('products').all()
  }),

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
      return distance + item.distance;
    }, 0);
  }),

  totalOrganic: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((organic, item) => {
      if(typeof item.seals !== 'undefined') {
        return item.seals.includes('EUBio') ? 1 : 0;
      } else {
        return 0;
      }
    }, 0);
  }),

  totalSugar: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((sugar, item) => {
      return sugar + item.sugar;
    }, 0);
  }),

  totalPrice: Ember.computed('sessionState.cartItems', function() {
    return this.get('sessionState.cartItems').reduce((price, item) => {
      return price + item.price;
    }, 0);
  }),

});
