import Ember from 'ember';
import config from '../config/environment';
import OSFAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';


export default Ember.Controller.extend(OSFAgnosticAuthControllerMixin, {
      signupUrl: `${config.OSF.url}login?`
});
