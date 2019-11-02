var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    $("#chats").on("click", ".username", function (event) {
      //get the username value
      Friends.toggleStatus($(event.target).text());


      
    });

  },

  renderMessage: function(message) {
    let newMessage = MessageView.render(message);
    MessagesView.$chats.prepend(newMessage);
  }

};
