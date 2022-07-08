let websocket;

module.exports = {
  init: (httpServer) => {
    websocket = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      },
    });
    return websocket;
  },
  getWebsocket: () => {
    if (!websocket) {
      throw new Error("Websocket not initialized");
    }
    return websocket;
  },
};
