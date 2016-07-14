import template from './add-new.html';
import style from './add-new.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', function (movieService) {
    this.style = style;
 
    this.submitMovie = () => {
      if (this.newMovie) {
        movieService.add(this.newMovie)
          .then(() => this.message = 'Movie Successfully Added')
          .catch(() => this.message = 'There Was an Error Adding Your Movie');
        this.newMovie = {};
      } else this.message = 'Please Enter a New Movie';
    };

  }],
};
