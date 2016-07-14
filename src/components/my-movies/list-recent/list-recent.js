import template from './list-recent.html';
import style from './list-recent.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function (movieService, screeningService) {
    this.style = style;
    this.foo = 'foo';
  }],
};
