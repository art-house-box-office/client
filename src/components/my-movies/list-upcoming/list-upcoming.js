import template from './list-upcoming.html';
import style from './list-upcoming.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function (movieService, screeningService) {
    this.style = style;
    this.foo = 'baz';
  }],
};
