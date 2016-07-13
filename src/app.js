import 'angular-ui-router/release/stateEvents';

import angular from 'angular';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngDialog from 'ng-dialog';

const app = angular.module('app', [
  components,
  services,
  router,
  ngAnimate,
  ngDialog,
  angular.module('ui.router.state.events').name,
]);

app.constant('apiUrl', process.env.API_URL);
console.log('process.env', process.env.API_URL);
app.constant('tokenName', process.env.TOKEN_NAME);

export default app;
