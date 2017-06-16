'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('revoKingdomCityApp.login', [])
  .controller('LoginController', LoginController)
  .name;
