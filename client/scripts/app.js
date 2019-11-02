var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  roomname: undefined,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(()=>{
      App.fetch();
    }, 1000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      $('#chats').empty();
      // examine the response from the server request:
      for (let i = data.results.length - 1; i >= 0; i--) {
        if (Rooms[data.results[i].roomname] === undefined && data.results[i].roomname !== undefined) {
          RoomsView.renderRoom(data.results[i].roomname);
          Rooms[data.results[i].roomname] = data.results[i].roomname;
        }
        let messageData = {
          username: data.results[i].username,
          text: data.results[i].text,
          roomname: data.results[i].roomname,
          friend: ''
        };
        if (Friends[messageData.username]) {
          messageData.friend = 'friend';
        }
        if (messageData.text && messageData.username) {
          if (App.roomname) {
            if (messageData.roomname === App.roomname) {
              let friendNode = MessagesView.renderMessage(messageData);
              $('#chats').prepend(friendNode);
            }
          } else {
            let friendNode = MessagesView.renderMessage(messageData);
            $('#chats').prepend(friendNode);
          }
        }





      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
