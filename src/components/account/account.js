import template from './account.html';
import style from './account.scss';

export default {
  template,
  controllerAs: 'account',
  bindings: {
    add: '&',
  },
  controller,
};

function controller() {
  this.style = style;
  this.submit = () => {
    const company = this.company;
    this.add({ company });
    this.company = {};
  };
}
