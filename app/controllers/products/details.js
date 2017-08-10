import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

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