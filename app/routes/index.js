import Ember from 'ember';

export default Ember.Route.extend({
    // Visiting '/' route will result in '/repositories' loading
    beforeModel() {
       this._super(...arguments);
       this.replaceWith('repositories');
     }
});
