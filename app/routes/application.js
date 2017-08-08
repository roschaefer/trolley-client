import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  beforeModel(params){
    console.log('ich bin in der application route');
    this.get('communication').setEventListener('rfidRead', (eventParams) => {
      console.log(eventParams);
      this.transitionTo('products', eventParams.id);
    });
  }
});
