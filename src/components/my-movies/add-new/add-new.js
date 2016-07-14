import template from './add-new.html';
import style from './add-new.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function (movieService, screeningService) {
    this.style = style;
    movieService.getAll()
      .then(movies => this.movies = movies);

  }],
};
