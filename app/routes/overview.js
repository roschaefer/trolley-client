import Ember from 'ember';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  sessionState: Ember.inject.service(),
  products: Ember.inject.service(),
  beforeModel(){
    this.get('sessionState').set('shoppingListItems', this.get('products').all());

    // reset click on this button
    this.get('communication').setEventListener('leftButtonClick', null);
    this.get('communication').setEventListener('rightButtonClick', null);
  },
});
