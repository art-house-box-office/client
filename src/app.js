import 'angular-ui-router/release/stateEvents';

import angular from 'angular';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngDialog from 'ng-dialog';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

const app = angular.module('app', [
  components,
  services,
  router,
  ngAnimate,
  ngAria,
  ngDialog,
  ngMaterial,
  ngMessages,
  angular.module('ui.router.state.events').name,
]);

app.constant('apiUrl', process.env.API_URL);
app.constant('tokenName', process.env.TOKEN_NAME);

export default app;
