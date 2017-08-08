import Ember from 'ember';

export default Ember.Service.extend({
  eventListeners: {},

  init() {
    this._super(...arguments);

    let socket = new WebSocket('ws://localhost:7000');
    socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      let type = data.type;
      let params = data.params;
      if(typeof this.get('eventListeners')[type] === 'function'){
        this.get('eventListeners')[type](params);
      }
    };
  },

  setEventListener(name, callback){
    this.eventListeners[name] = callback;
  }
});
