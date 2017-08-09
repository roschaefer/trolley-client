import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  beforeModel(){
    this.get('communication').setEventListener('rfidRead', (eventParams) => {
      this.transitionTo('products', eventParams.id);
    });
  }
});
