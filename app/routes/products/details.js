import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  model(params) {
    this.get('communication').setEventListener('rightButtonClick', () => {
      this.transitionTo('products', params.id);
    });
    return params.name;
  }
});
