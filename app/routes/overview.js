import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({
  communication: Ember.inject.service(),
  sessionState: Ember.inject.service(),
  products: Ember.inject.service(),
  beforeModel(){
    this.get('sessionState').set('shoppingListItems', _.shuffle(this.get('products').all()).slice(0, 8));

    // reset click on this button
    this.get('communication').setEventListener('leftButtonClick', null);
    this.get('communication').setEventListener('rightButtonClick', null);
  },
});