import template from './list-all.html';
import style from './list-all.scss';

export default {
  template,
  controller: ['movieService', function controller(movieService) {
    this.style = style;
    movieService.getAll()
      .then(movies => this.movies = movies);

  }],
};
