var hotel = {
    name: "DIVTOPIA",
    rating: 5.0,
    roomRate: 325,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",

    numberOfRoomsAvailable: function() {
        //length of the number of rooms available, returned as an integer (1, 5, 20, etc)
        return this.roomNumbersAvailable.length;
    },

    numberOfRooms: function() {
        //available rooms added to booked rooms 
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    bookRoom: function() {
        //only book a room if one is available

        if (this.numberOfRoomsAvailable() > 0) {
            var selectedRoomDD = document.getElementById("selectedRoom").value;
            this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
            ////////////////////////////////////////////////////////////////////////////

            var roomsListed = "<form> <select id= 'selectedRoom'>";


            for (var i = 0; i < this.roomNumbersAvailable.length; i++) {

                roomsListed += "<option value =" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
            }
            roomsListed += "</select>";
            roomsListed += "</form>";
            document.getElementById("selectARoom").innerHTML = roomsListed;
            ////////////////////////////////////////////////////////////////////////////////////////////////////

            /*var roomsBooked = "<form> <select id= 'roomBooked'>";
            for (var i = 0; i < this.roomNumbersBooked.length; i++) {

                roomsBooked += "<option value =" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
            roomsBooked += "</select></form>";
            document.getElementById("rmBooked").innerHTML = roomsBooked;*/


        }
    this.updateAvailableRoomsList();
    this.updateBookedRoomsList();
    },

    updateAvailableRoomsList: function() {
        var rmList = "<form> <select id='mySelect'>";
        for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
            rmList += "<option value='" + this.roomNumbersAvailable[i] + "'>" + this.roomNumbersAvailable[i] + "</option>";
        }
        rmList += "</select> </form>";
        document.getElementById("selectARoom").innerHTML = rmList;
    },
    updateBookedRoomsList: function() {
        var roomsBooked = "<form> <select id='bookedDropdown'>";
        for (var i = 0; i < this.roomNumbersBooked.length; i++) {
            roomsBooked += '<option value="' + this.roomNumbersBooked[i] + '">' + this.roomNumbersBooked[i] + "</option>";
        }
        roomsBooked += "</select> </form>";
        document.getElementById("rmBooked").innerHTML = roomsBooked;
    },

    unBookRoom: function() {
        //Only unbook a room if there is a room booked

        if (this.roomNumbersBooked.length > 0) {
            var unBookDD = document.getElementById("selectedRoom").value;
            this.roomNumbersAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(unBookDD), 1));
            ///////////////////////////////////////////////////////////////////////////////////////

            var roomsListed = "<form> <select id= 'UB'>";


            for (var i = 0; i < this.roomNumbersBooked.length; i++) {

                roomsListed += "<option value ='" + this.roomNumbersBooked[i] + "'>" + this.roomNumbersBooked[i] + "</option>";
            }
            roomsListed += "</select>";
            roomsListed += "</form>";
            document.getElementById("roomBooked").innerHTML = roomsListed;
            //////////////////////////////////////////////////
        }
        this.updateAvailableRoomsList();
        this.updateBookedRoomsList();
    }
};


// End of UL List Section

// Start of select a room method
//roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],

var selectRoomList = "<form> <select id= 'selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

    selectRoomList += "<option value =" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select></form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

////////////////////////////////////////////////////////////////////////////////////
var roomsBooked = "<form> <select id= 'roomBooked'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {

    roomsBooked += "<option value =" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
}
roomsBooked += "</select></form>";
document.getElementById("rmBooked").innerHTML = roomsBooked;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
