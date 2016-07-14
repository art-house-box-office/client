import template from './query-other.html';
import style from './query-other.scss';

export default {
  template,
  controller: ['$state', controller],
};

function controller($state) {
  this.style = style;
  $state.go('query', { button: 'other' });
}
