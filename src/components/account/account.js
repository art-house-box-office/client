import template from './account.html';
import style from './account.scss';

export default {
  bindings: {
    companyName: '=',
  },
  template,
  controller: [
    '$mdDialog',
    'accountService',
    function controller($mdDialog, accountService) {
      this.style = style;
      this.addCompanyServerError = '';
      this.locations = [];

      this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']; // eslint-disable-line

      // Populates User Info
      accountService.getUserInfo()
        .then(r => {
          this.currentUser = r.username;
          this.currentUserEmail = r.email;
        });

      // Fetches company by current user on load
      accountService.getCompanyByUserId()
        .then(r => this.companyName = r);

      accountService.getLocationsByUserId()
        .then(locations => {
          // TODO: fix in route or model, or better ux
          this.locations = locations.map(location => {
            accountService.getRooms(location._id)
              .then(rooms => location.rooms = rooms);

            return location;
          });
        });

      this.showAddCompanyDialog = () => $mdDialog.show({
        autoWrap: false,
        clickOutsideToClose: true,
        contentElement: '#addCompanyDialog',
        onRemoving() {
          this.companyForm.reset();
        },
      });

      this.addCompany = companyName => accountService.add(companyName)
        .then(data => {
          this.companyName = data.companyName;
          this.companyData = {};
          // this.companyForm.reset();
          $mdDialog.hide();
        });

      this.showAddLocationDialog = () => $mdDialog.show({
        autoWrap: false,
        clickOutsideToClose: true,
        contentElement: '#addLocationDialog',
        onRemoving() {
          this.locationForm.reset();
        },
      });

      this.addLocation = locationData => {
        accountService.addLocation(locationData)
          .then(returnedLocId => {
            locationData._id = returnedLocId;
            this.locations.push(locationData);
            this.locationData = {};
            // this.locationForm.reset();
            $mdDialog.hide();
          });
      };

      this.showEditLocationDialog = (index, location) => {
        this.editLocationData = location;
        this.editLocationData.index = index;

        $mdDialog.show({
          autoWrap: false,
          clickOutsideToClose: true,
          contentElement: '#editLocationDialog',
          // onRemoving() {
          //   this.editLocationForm.reset();
          // },
        });
      };

      this.editLocation = location => {
        accountService.editLocation(location, location._id)
          .then(r => {
            this.locations[location.index].address = r.address;
            this.locations[location.index].city = r.city;
            this.locations[location.index].company = r.company;
            this.locations[location.index].country = r.country;
            this.locations[location.index].name = r.name;
            this.locations[location.index].state = r.state;
            this.locations[location.index].zip = r.zip;
            this.editLocationData = {};
            // this.editLocationForm.reset();
            $mdDialog.hide();
          });
      };

      // this.deleteLocation = index => {
      //   const locationId = this.locations[index]._id;
      //   accountService.deleteLocation(locationId);
      //   this.locations.splice(index, 1);
      // };

      this.showAddRoomDialog = (index, location) => {
        this.location = location;
        this.location.index = index;

        $mdDialog.show({
          autoWrap: false,
          clickOutsideToClose: true,
          contentElement: '#addRoomDialog',
          onRemoving() {
            this.addRoomForm.reset();
          },
        });
      };

      this.addRoom = (currentLocation, roomData) => {
        const roomDataCopy = roomData;
        roomData.location = currentLocation._id;

        accountService.addRoom(roomData)
          .then(r => {
            roomDataCopy._id = r._id;
            if (this.locations[currentLocation.index].rooms) {
              this.locations[currentLocation.index].rooms.push(roomDataCopy);
            } else {
              this.locations[currentLocation.index].rooms = [];
              this.locations[currentLocation.index].rooms.push(roomDataCopy);
            }
            this.addRoomData = {};
            // this.addRoomForm.reset();
            $mdDialog.hide();
          });
      };

      this.showEditRoomDialog = (index, parentIndex, room) => {
        this.editRoomData = room;
        this.editRoomData.index = index;
        this.editRoomData.parentIndex = parentIndex;

        $mdDialog.show({
          autoWrap: false,
          clickOutsideToClose: true,
          contentElement: '#editRoomDialog',
          // onRemoving() {
          //   this.editRoomForm.reset();
          // },
        });
      };

      this.editRoom = room => {
        accountService.editRoom(room, room._id)
          .then(r => {
            this.locations[room.parentIndex].rooms[room.index].name = r.name;
            this.locations[room.parentIndex].rooms[room.index].seats = r.seats;
            this.editRoomData = {};
            // this.editRoomForm.reset();
            $mdDialog.hide();
          });
      };

      // this.deleteRoom = (index, parentIndex) => {
      //   const thisLocation = this.locations[parentIndex];
      //   const thisRoom = thisLocation.rooms[index];
      //   accountService.deleteRoom(thisRoom._id)
      //   .then(() => {
      //     this.locations[parentIndex].rooms.splice(index, 1);
      //   });
      // };
      
    },
  ],
};
