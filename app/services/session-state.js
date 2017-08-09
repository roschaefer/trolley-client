import Ember from 'ember';

export default Ember.Service.extend({
  prioritySet: ['regional', 'organic', 'sugar', 'price'],
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
    if (!(this.get('prioritySet').includes(priority))) { return }
    if (state) {
      this.get('priorities').pushObject(priority);
    } else {
      this.get('priorities').removeObject(priority);
    }
  },
  nextPriority(priority){
    if (priority) {
      const lastIndex = this.get('priorities').lastIndexOf(priority);
      const nextPriority = this.get('priorities').get(lastIndex + 1);
      if (Ember.isNone(nextPriority)) {
        return null;
      } else {
        return nextPriority;
      }
    } else {
      return this.get('priorities.firstObject');
    }
  }
});
