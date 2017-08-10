import Ember from 'ember';

export default Ember.Controller.extend({

  sessionState: Ember.inject.service(),

  activePriorities: Ember.computed('sessionState.priorities', function() {
    return this.get('sessionState.priorities');
  })

});
