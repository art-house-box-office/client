import angular from 'angular';
import app from './app';
import './styles/main.scss';
import http from './config-http';
// import router from './router';
// import auth from './auth';

app.config(http);
// app.config(router);
// app.run(auth);

angular.bootstrap(document, [app.name]);
