import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),
  detail: Ember.computed(function(){
    let detail = this.get('model').detail;
    let product = this.get('model').product;
    if (typeof product.details[detail] !== 'undefined') {
        return product.details[detail];
    } else {
        return null;
    }
  }),
  nextPriorityLabel: Ember.computed('sessionState.priorities', function() {
    let labels = {
        regional: 'Regional?',
        organic: 'Bio?',
        sugar: 'Zucker?',
        price: 'Preis?',
    };
    let currentDetail = this.get('model').detail;
    let next = this.get('sessionState').nextPriority(currentDetail);

    if(next) {
        return labels[next];
    } else {
        return null;
    }
  })

});