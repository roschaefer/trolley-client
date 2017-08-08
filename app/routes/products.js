import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  model(params) {
    console.log('ich bin in der products route');
    this.get('communication').setEventListener('rightButtonClick', (eventParams) => {
      this.transitionTo('products/details', params.id, 'regional');
    });
    return params.id;
  }
});
