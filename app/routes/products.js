import Ember from 'ember';

export default Ember.Route.extend({
  sessionState: Ember.inject.service(),
  communication: Ember.inject.service(),
  products: Ember.inject.service(),

  model(params) {

    this.get('communication').setEventListener('rightButtonClick', () => {
      let nextPriority = this.get('sessionState').nextPriority();
      if (nextPriority) {
        this.transitionTo('products/details', params.id, nextPriority);
      } else {
        this.transitionTo('products', params.id);
      }
    });

    this.get('communication').setEventListener('leftButtonClick', () => {
      this.transitionTo('/');
    });

    return this.get('products').find(params.id);
  }
});
