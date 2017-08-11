import Ember from 'ember';
import _ from 'lodash';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  activePriorities: Ember.computed('sessionState.priorities', function() {
    return this.get('sessionState.priorities');
  }),

  nextPriorityLabel: Ember.computed('sessionState.priorities', function() {
    let details = _.shuffle(this.get('model').details().keys());
    let labels = {
        regional: 'Regional?',
        organic: 'Bio?',
        sugar: 'Zucker?',
        price: 'Preis?',
    };
    let next = details[0];

    if(next && typeof product.details[next] !== 'undefined') {
        return labels[next];
    } else {
        return null;
    }
  })

});
