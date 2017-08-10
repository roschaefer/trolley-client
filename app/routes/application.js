import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  sessionState: Ember.inject.service(),
  beforeModel(){
    this.get('communication').setEventListener('rfidRead', (eventParams) => {
      //this.transitionTo('products', eventParams.id);
      this.get('store').findRecord('product-rfid', eventParams.id).then((rfid) => {
        this.get('sessionState').addToCart(rfid.get('product'));
      });
    });
    this.get('communication').setEventListener('prioritySwitch', (eventParams) => {
      //this.transitionTo('products', eventParams.id);
      this.get('sessionState').updatePriority(eventParams.priority, eventParams.state);
    });
  },
  redirect: function () {
    this.transitionTo('overview');
  }
});
