import template from './query-all.html';
import style from './query-all.scss';

export default {
  template,
  controller: ['$state', controller],
};

function controller($state) {
  this.style = style;
  $state.go('query', { button: 'all' });
}
