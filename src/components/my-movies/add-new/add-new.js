import template from './add-new.html';
import style from './add-new.scss';

export default {
  template,
  controller: ['movieService', 'accountService', '$window', 
    function (movieService, accountService, $window) {
      this.style = style;
      this.addingMovie = false;
      this.fetchMovies = () => {
        movieService.getAll()
          .then(list => this.movies = list);
      };

      const thisUser = $window.localStorage.getItem('userID');

      accountService
        .getLocationsByUserId(thisUser)
        .then(locArray => {
          this.locations = locArray;
        });

      this.fetchTheaters = () => {
        const locId = this.selectedLocation;
        if (locId) {
          accountService.getRooms(locId)
            .then(r => this.theaters = r);
        } else this.theaters = [];
      };
  
      this.submitMovie = () => {

        movieService.add(this.newMovie)
          .then((r) => {
            this.message = 'Movie Successfully Added';
            this.movies.unshift(r);
            this.newMovie = {};
            this.addingMovie = false;
          })
          .catch(() => this.message = 'Unable to Add Movie');
      };

      this.submitRun = () => {
        console.log('run submit');
      };

    }],
};
