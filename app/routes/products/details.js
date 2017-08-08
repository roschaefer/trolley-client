import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  model(params) {
    console.log('ich bin in der details route');
    this.get('communication').setEventListener('rightButtonClick', (eventParams) => {
      this.transitionTo('products', params.id);
    });
    return params.name;
  }
});
