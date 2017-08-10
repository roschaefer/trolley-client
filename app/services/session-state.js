 import Ember from 'ember';

const prioritySet =  ['regional', 'organic', 'sugar', 'price'];
export default Ember.Service.extend({
  cartItems: [],
  shoppingListItems: [],
  priorities: [],

  init(){
    this._super(...arguments);
  },

  addToCart(item) {
    this.get('cartItems').pushObject(item);
    this.notifyPropertyChange('cartItems');
  },

  updatePriority(priority, state) {
    if (!(prioritySet.includes(priority))) { return }
    let updatePriorities = this.get('priorities');
    if (state) {
      updatePriorities.pushObject(priority);
    } else {
      updatePriorities.removeObject(priority);
    }
    this.set('priorities', updatePriorities.uniq());
  },

  nextPriority(priority) {
    let nextPriority;
    if (priority) {
      const lastIndex = this.get('priorities').lastIndexOf(priority);
      nextPriority = this.get('priorities').get(lastIndex + 1);
    } else {
      nextPriority = this.get('priorities.firstObject');
    }

    if (Ember.isNone(nextPriority)) {
      return null;
    } else {
      return nextPriority;
    }
  }
});
