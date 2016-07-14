screeningService.$inject = ['$http', 'apiUrl'];

export default function screeningService($http, apiUrl) {

  return {
    // all screenings
    getAll() {
      return $http
      .get(`${apiUrl}/screenings`)
      .then(r => r.data);
    },
    // specific screening
    get(screeningId) {
      return $http
      .get(`${apiUrl}/screenings/${screeningId}`)
      .then(r => r.data);
    },
    // add screening and updates current User field: screening
    add(screening) {
      return $http
        .post(`${apiUrl}/screenings`, screening)
        .then(r => r.data._id);
    },
    // edit screening
    edit(screening, screeningId) {
      return $http
        .put(`${apiUrl}/screenings/${screeningId}`)
        .then(r => r.data);
    },
    // delete screening
    delete(screeningId) {
      return $http
      .delete(`${apiUrl}/screenings/${screeningId}`)
      .then(r => r.data);
    },
    // aggregated results
    agg(params) {
      return $http
      .get(`${apiUrl}/screenings/agg`, params)
      .then(r => {
        return r.data;
      });
    },
    // Post new Run
    addRun(run) {
      return $http
        .post(`${apiUrl}/runs`, run)
        .then(r => r.data);
    },
  };
}
