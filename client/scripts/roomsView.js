var RoomsView = {
  // buttons
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  renderRoom: function(roomName) {
    let newOption = $(`<option value="${roomName}">${roomName}</option>`);
    RoomsView.$select.append(newOption);
  }

};

