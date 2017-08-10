import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  activePriorities: Ember.computed('sessionState.priorities', function() {
    return this.get('sessionState.priorities');
  }),

  nextPriorityLabel: Ember.computed('sessionState.priorities', function() {
    let labels = {
        regional: 'Regional?',
        organic: 'Bio?',
        sugar: 'Zucker?',
        price: 'Preis?',
    };
    let next = this.get('sessionState').nextPriority();

    if(next) {
        return labels[next];
    } else {
        return null;
    }
  })

});
