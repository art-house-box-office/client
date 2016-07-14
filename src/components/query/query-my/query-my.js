import template from './query-my.html';
import style from './query-my.scss';

export default {
  template,
  controller: ['$state', controller],
};

function controller($state) {
  this.style = style;
  $state.go('query', { button: 'my' });
}
