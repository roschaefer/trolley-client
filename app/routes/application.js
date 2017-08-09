import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  sessionState: Ember.inject.service(),
  beforeModel(){
    this.get('communication').setEventListener('rfidRead', (eventParams) => {
      //this.transitionTo('products', eventParams.id);
      this.get('store').findRecord('product', eventParams.id).then((product) => {
        this.get('sessionState').addToCart(product);
      });
    });
    this.get('communication').setEventListener('prioritySwitch', (eventParams) => {
      //this.transitionTo('products', eventParams.id);
      this.get('sessionState').updatePriority(eventParams.priority, eventParams.state);
    });
  }
});
