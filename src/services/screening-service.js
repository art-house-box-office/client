screeningService.$inject = ['$http', 'apiUrl'];

export default function screeningService($http, apiUrl) {

  return {
    // all Screenings
    get() {
      return $http
      .get(`${apiUrl}/screenings`)
      .then(r => r.data);
    },
    // specific Screening
    getScreening(screeningId) {
      return $http
      .get(`${apiUrl}/screenings/${screeningId}`)
      .then(r => r.data);
    },
    // add Screening
    add(screening) {
      return $http
      .post(`${apiUrl}/screenings`, screening)
      .then(r => r.data);
    },
    // update Screening
    update(screeningId) {
      return $http
      .update(`${apiUrl}/screenings/${screeningId}`)
      .then(r => r.data);
    },
    // delete Screening
    delete(screeningId) {
      return $http
      .delete(`${apiUrl}/screenings/${screeningId}`)
      .then(r => r.data);
    },
    // aggregated results
    agg() {
      return $http
      .get(`${apiUrl}/screenings/agg`)
      .then(r => {
        // console.log(r.data);
        return r.data;
      });
    },
  };
}
