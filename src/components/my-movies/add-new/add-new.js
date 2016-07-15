import template from './add-new.html';
import style from './add-new.scss';

export default {
  template,
  controller: ['movieService', 'accountService', '$window', 'screeningService',
    function controller(movieService, accountService, $window, screeningService) {
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

      this.startTimeIsolated = () => {
        const fullTime = new Date(this.startTime);
        const hour = fullTime.getHours();
        const minute = fullTime.getMinutes();
        return `${hour}:${minute}`;
      };

      this.getSeatData = () => {
        let found;
        this.theaters.forEach(room => {
          if (room._id === this.selectedRoom) {
            found = room.seats;
          }
        });
        return found;
      };

      this.submitRun = () => {
        const postData = {
          startDate: this.startDate,
          endDate: this.endDate,
          times: [this.startTimeIsolated()],
          movieId: this.selectedMovie,
          theaterId: this.selectedRoom,
          seats: this.seatCount || this.getSeatData(this.selectedRoom),
        };
        if (postData.startDate && postData.endDate
            && postData.times && postData.movieId
            && postData.theaterId && postData.seats) {
          screeningService.addRun(postData)
            .then(() => this.message = 'Run Successfully Added');
        }

      };

    }],
};
