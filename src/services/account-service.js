accountService.$inject = ['$http', 'apiUrl', '$window'];

export default function accountService($http, apiUrl, $window) {

  return {

    // specific Company
    getCompany(companyId) {
      return $http
      .get(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // get company by user ID
    getCompanyByUserId(userId) {
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(company => {
          return $http
            .get(`${apiUrl}/companies/${company}`)
            .then(r => r.data.name);
        });
    },
    // add Company and updates current User field: company
    add(company) {
      const userId = $window.localStorage.getItem('userID');
      return $http
      .post(`${apiUrl}/companies`, { name: company })
      .then(r => r.data._id)
      .then(id => {
        return $http
          .put(`${apiUrl}/users/${userId}`, { company: id })
          .then(r => r.data);
      });
    },
    // delete Company
    delete(companyId) {
      return $http
      .delete(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

    // add Location
    addLocation(location) {
      const userId = $window.localStorage.getItem('userID');
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(companyId => {
          location.company = companyId;
          return $http
            .post(`${apiUrl}/locations`, location)
            .then(r => r.data._id);
        });
    },

    // edit Location
    editLocation(locationData, locationId) {
      return $http.put(`${apiUrl}/locations/${locationId}`, locationData)
        .then(r => r.data);
    },

    // delete Location
    deleteLocation(locationId) {
      return $http.delete(`${apiUrl}/locations/${locationId}`)
        .then(r => r.data);
    },

    // Get Location by User Id
    getLocationsByUserId(userId) {
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(companyId => {
          return $http
            .get(`${apiUrl}/locations/bycompany/${companyId}`)
            .then(r => r.data);
        });
    },

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    // Get All Rooms by Location 
    getRooms(locId) {
      return $http
        .get(`${apiUrl}/theaters/bylocation/${locId}`)
        .then(r => r.data);
    },
    // Post New Room (Theater)
    addRoom(room) {
      return $http
        .post(`${apiUrl}/theaters`, room)
        .then(r => r.data);
    },
    // Update name and room data for Room (Theater)
    editRoom(roomData, roomId) {
      return $http
        .put(`${apiUrl}/theaters/${roomId}`, roomData)
        .then(r => r.data);
    },
     // Delete Room (Theater)
    deleteRoom(roomId) {
      return $http
        .delete(`${apiUrl}/theaters/${roomId}`)
        .then(r => r.data);
    },

  };
}
