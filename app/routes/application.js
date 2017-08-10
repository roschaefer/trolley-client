import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  sessionState: Ember.inject.service(),
  products: Ember.inject.service(),
  beforeModel(){
    this.get('communication').setEventListener('rfidRead', (eventParams) => {

      var product = this.get('products').findByRfid(eventParams.id);
      this.get('sessionState').addToCart(product);
      this.transitionTo('products', product.id);

    });
    this.get('communication').setEventListener('prioritySwitch', (eventParams) => {

      //this.transitionTo('products', product.id);
      this.get('sessionState').updatePriority(eventParams.priority, eventParams.state);

    });
  }
});
