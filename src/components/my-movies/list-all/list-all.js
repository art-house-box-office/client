import template from './list-all.html';
import style from './list-all.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function (movieService, screeningService) {
    this.style = style;
    this.foo = 'foo';
  }],
};
