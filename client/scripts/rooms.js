var Rooms = {
  //Roomname: roomname



  add: function () {
    let newRoom = $('#roomname').val();
    console.log(newRoom);
    Rooms[newRoom] = newRoom;
    RoomsView.renderRoom(newRoom);
  }

};