var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (let i = data.results.length - 1; i >= 0; i--) {
        // console.log(data.results[i]);
        let messageData = {
          username: data.results[i].username,
          text: data.results[i].text,
          roomname: data.results[i].roomname
        };
        // console.log(messageData);
        if (messageData.text && messageData.username) {
          $('#chats').prepend(MessagesView.renderMessage(messageData));
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
