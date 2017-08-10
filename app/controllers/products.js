import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  activePriorities: Ember.computed('sessionState.priorities', function() {
    return this.get('sessionState.priorities');
  }),

  nextPriorityLabel: Ember.computed('sessionState.priorities', function() {
    let product = this.get('model');
    let labels = {
        regional: 'Regional?',
        organic: 'Bio?',
        sugar: 'Zucker?',
        price: 'Preis?',
    };
    let next = this.get('sessionState').nextPriority();

    if(next && typeof product.details[next] !== 'undefined') {
        return labels[next];
    } else {
        return null;
    }
  })

});
