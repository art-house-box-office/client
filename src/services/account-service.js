accountService.$inject = ['$http', 'apiUrl'];

export default function accountService($http, apiUrl) {

  return {
    // all Companies
    get() {
      return $http
      .get(`${apiUrl}/companies`)
      .then(r => r.data);
    },
    // specific Company
    getCompany(companyId) {
      return $http
      .get(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // add Company
    add(company) {
      return $http
      .post(`${apiUrl}/company`, company)
      .then(r => r.data);
    },
    // update Company
    update(companyId) {
      return $http
      .update(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // delete Company
    delete(companyId) {
      return $http
      .delete(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // add Location
    addLoc(location) {
      return $http
      .post(`${apiUrl}/location`, location)
      .then(r => r.data);
    },
  };
}
