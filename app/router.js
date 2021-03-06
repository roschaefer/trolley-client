import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('products', { path: '/products/:id' });
  this.route('products/details', { path: '/products/:id/details/:name' });
  this.route('overview');
});

export default Router;
