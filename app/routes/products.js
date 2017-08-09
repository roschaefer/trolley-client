import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  model(params) {
    this.get('communication').setEventListener('rightButtonClick', () => {
      this.transitionTo('products/details', params.id, 'regional');
    });
    return params.id;
  }
});
