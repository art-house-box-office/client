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

  this.submitCompany = ($event) => {
    const company = this.companyInput;
    accountService.add(company);
    this.companyName = company;
    $event.target.reset();
  };

  //  L O C A T I O N S = = = = = = = = = = = = = 
  this.fetchLocations = () => {
    return accountService.getLocationsByUserId(this.currentUserId)
      .then(r => this.locations = r);
  };

  this.submitLocation = ($event) => {
    const locationData = this.newLocation;
    accountService.addLocation(locationData)
      .then(returnedLocId => locationData._id = returnedLocId);
    this.locations.push(locationData);
    this.newLocation = {};
    $event.target.reset();
    this.locationAdding = false;
  };

  this.editLocation = (index) => {
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
    this.changeActive(-1);
  };

  this.deleteLocation = (index) => {
    const loc = this.locations[index];
    accountService.deleteLocation(loc._id);
    this.locations.splice(index, 1);
  };
  // Editing location
  this.changeActive = (index) => {
    this.activeIndex = index;
  };
  this.isActive = (index) => {
    return this.activeIndex === index;
  };

  // R O O M S = = = = = = = = = = = = = 
  this.fetchRooms = (index) => {
    const location = this.locations[index];
    accountService.getRooms(location._id)
      .then(r => this.locations[index].rooms = r);
  };

  this.submitRoom = (index) => {
    const inputRoom = this.newRoom;
    const location = this.locations[index];
    inputRoom.location = location._id;
    accountService.addRoom(inputRoom)
      .then(() => {
        this.locations[index].rooms.push(inputRoom);
      });
    this.newRoom = {};
    this.changeActiveRoom(-1);
  };

  this.submitRoomEdit = (data, index, parentIndex) => {
    const putData = {
      name: data.name,
      seats: data.seats,
    };
    const thisLocation = this.locations[parentIndex];
    const thisRoom = thisLocation.rooms[index];
    accountService.editRoom(putData, thisRoom._id);
    this.changeActiveRoomEdit(-1);
  };

  this.deleteRoom = (index, parentIndex) => {
    const thisLocation = this.locations[parentIndex];
    const thisRoom = thisLocation.rooms[index];
    accountService.deleteRoom(thisRoom._id)
      .then(() => {
        this.locations[parentIndex].rooms.splice(index, 1);
      });
  };
  // Adding Room Activate Form
  this.changeActiveRoom = (index) => {
    this.activeRoomIndex = index;
  };
  this.isActiveRoom = (index) => {
    return this.activeRoomIndex === index;
  };
  // Editing Room Active Form
  this.changeActiveRoomEdit = (index) => {
    this.activeRoomEditIndex = index;
  };
  this.isActiveRoomEdit = (index) => {
    return this.activeRoomEditIndex === index;
  };

}
