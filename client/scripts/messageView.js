var MessageView = {

  render: _.template(`
      <div class="chat <%- friend %>">
        <div class="username"> <%- username %> </div>
        <div><%- text %></div>
      </div>
    `)

};