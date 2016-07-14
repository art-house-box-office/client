movieService.$inject = ['$http', 'apiUrl'];

export default function movieService($http, apiUrl) {

  return {
    // all Movies
    getAll() {
      return $http
      .get(`${apiUrl}/movies`)
      .then(r => r.data);
    },
    // specific Movie
    get(movieId) {
      return $http
      .get(`${apiUrl}/movies/${movieId}`)
      .then(r => r.data);
    },
    // add Movie and updates current User field: Movie
    add(movie) {
      return $http
        .post(`${apiUrl}/movies`, movie)
        .then(r => r.data);
    },
    searchOMDb(title) {
      return $http
        .get(`${apiUrl}/movies/search/${title}`)
        .then(r => r.data);
    },
    // edit movie
    edit(movie, movieId) {
      return $http
        .put(`${apiUrl}/movies/${movieId}`)
        .then(r => r.data);
    },
    // delete Movie
    delete(movieId) {
      return $http
      .delete(`${apiUrl}/movies/${movieId}`)
      .then(r => r.data);
    },
  };
}
