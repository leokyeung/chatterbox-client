var RoomsView = {
  // buttons
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('button').on('click', Rooms.add);
    RoomsView.$select.on('change', function() {
      App.roomname = RoomsView.$select.val();
    });
  },

  renderRoom: function(roomName) {
    let newOption = $(`<option value="${roomName}">${roomName}</option>`);
    RoomsView.$select.append(newOption);
  }

};

