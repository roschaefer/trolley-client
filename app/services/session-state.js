import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  shoppingListItems: [],
  init(){
    this._super(...arguments);
  },
  addToCart(item){
    this.get('cartItems').pushObject(item);
  },
});
