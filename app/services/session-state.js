import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  shoppingListItems: [],
  priorities: [],
  init(){
    this._super(...arguments);
  },
  addToCart(item){
    this.get('cartItems').pushObject(item);
  },

  updatePriority(priority, state){
    if (!(['regional', 'organic', 'sugar', 'price'].includes(priority))) { return }
    if (state) {
      this.get('priorities').pushObject(priority);
    } else {
      this.get('priorities').removeObject(priority);
    }
  }
});
