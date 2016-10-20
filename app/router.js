import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('repositories');
  this.route('discover', { path: '/repositories/discover'});
  this.route('repository', { path: '/repositories/:repository_id'});
});

export default Router;
