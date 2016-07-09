import dotenv from 'dotenv';
import angular from 'angular';
import app from './app';
import http from './config-http';
// import router from './router';
// import auth from './auth';

import './styles/main.scss';

dotenv.config();

app.config(http);
// app.config(router);
// app.run(auth);

angular.bootstrap(document, [app.name]);
