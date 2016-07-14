import template from './my-movies.html';
import style from './my-movies.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function(movieService, screeningService) {
    this.style = style;
  }],
};
