import template from './user-auth.html';
import style from './user-auth.scss';

export default {
  template,
  bindings: {
    success: '&',
  },
  controller: [
    'userService',
    function controller(userService) {
      this.style = style;
      this.loginServerError = '';
      this.registerServerError = '';

      this.tryLogin = (loginData) => {
        userService.login(loginData)
          .then(() => this.success())
          // TODO: Make sure this is consistent with server error <<
          .catch(err => this.loginServerError = err.data.error);
      };

      this.tryRegister = (registerData) => {
        userService.signup(registerData)
          .then(() => this.success())
          // TODO: Make sure this is consistent with server error <<
          .catch(err => this.registerServerError = err.data.error);
      };
    },
  ],
};
