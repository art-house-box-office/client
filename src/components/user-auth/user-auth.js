import template from './user-auth.html';
import style from './user-auth.scss';

export default {
  template,
  bindings: {
    success: '&',
  },
  controller(userService) {
    this.style = style;
    this.loginForm = {};
    this.registerForm = {};

    this.tryLogin = () => {
      if (!this.loginForm.username || !this.loginForm.password) {
        return this.error = 'Please Fill Out Both Fields';
      }
      return userService.login(this.loginForm)
        .then(() => this.success())
// Make sure this is consistent with server error <<
        .catch(err => this.error = err.data.error);
    };

    this.tryRegister = () => {
      if (!this.registerForm.email || !this.registerForm.username ||
          !this.registerForm.password || !this.registerForm.confirmPassword) {
        return this.error = 'Please Fill Out All Fields';
      } else if (this.registerForm.password !== this.registerForm.confirmPassword) {
        return this.error = 'Passwords Do Not Match';
      } else {
        return userService.signup(this.registerForm)
          .then(() => this.success())
  // Make sure this is consistent with server error <<
          .catch(err => this.error = err.data.error.message);
      } 
    };
  },
};
