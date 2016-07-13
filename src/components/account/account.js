import template from './account.html';
import style from './account.scss';

export default {
  template,
  controllerAs: 'account',
  controller,
};

controller.$inject = ['accountService'];

function controller(accountService) {
  this.style = style;
  this.submit = ($event) => {
    const company = this.newAcct;
    accountService.add(company);
    $event.target.reset();
  };
  this.submitLoc = ($event) => {
    const location = this.newAcct;
    accountService.addLoc(location);
    $event.target.reset();
  };
}
