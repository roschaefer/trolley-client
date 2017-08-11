import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({
  sessionState: Ember.inject.service(),
  communication: Ember.inject.service(),
  products: Ember.inject.service(),

  model(params) {

    this.get('communication').setEventListener('rightButtonClick', () => {
      let productDetails = _.keys(this.get('products').find(params.id).details);
      let priorities = _.values(this.get('sessionState.priorities'));
      let intersec = _.shuffle(_.intersection(productDetails, priorities));

      console.log(productDetails);
      console.log(priorities);
      console.log(intersec);

      if (intersec.length > 0) {
        this.transitionTo('products/details', params.id, intersec[0]);
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
