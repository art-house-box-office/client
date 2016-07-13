import template from './account.html';
import style from './account.scss';

export default {
  template,
  controllerAs: 'account',
  controller,
};

controller.$inject = ['accountService', '$window'];

function controller(accountService, $window) {
  this.style = style;

  this.locations = [];

  this.currentUser = $window.localStorage.getItem('user');
  this.currentUserId = $window.localStorage.getItem('userID');
  // Fetches company by current user on load
  accountService.getCompanyByUserId(this.currentUserId)
    .then(r => this.companyName = r);

  this.fetchLocations = () => {
    return accountService.getLocationsByUserId(this.currentUserId)
      .then(r => this.locations = r);
  };

  this.submitCompany = ($event) => {
    const company = this.companyInput;
    accountService.add(company);
    this.companyName = company;
    $event.target.reset();
  };

  this.submitLocation = ($event) => {
    const locationData = this.newLocation;
    accountService.addLocation(locationData);
    this.locations.push(locationData);
    this.newLocation = {};
    $event.target.reset();
    this.locationAdding = false;
  };

  this.editLocation = (index, $event) => {
    const loc = this.locations[index];
    const putData = {
      name: loc.name,
      address: loc.address,
      city: loc.city,
      state: loc.state,
      zip: loc.zip,
      country: loc.country,
    };
    accountService.editLocation(putData, loc._id);
    $event.target.reset();
  };

  this.changeActive = (index) => {
    this.activeIndex = index;
  };

  this.isActive = (index) => {
    return this.activeIndex === index;
  };

  this.deleteLocation = (index) => {
    const loc = this.locations[index];
    accountService.deleteLocation(loc._id);
    this.locations.splice(index, 1);
  };

}
