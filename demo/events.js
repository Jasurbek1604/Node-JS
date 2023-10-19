const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("anything", (data) => {
  console.log(data);
});

emitter.emit("anything", { name: "jasurbek" });
emitter.emit("anything", { age: 19 });

class Dispatcher extends EventEmitter {
  subscribe(event, callback) {
    console.log("Subscribe!");
    this.on(event, callback);
  }
  dispatch(event, data) {
    console.log("Dispatch!");
  }
}

const dis = new Dispatcher();

dis.subscribe("aa", (data) => {
  console.log("on aa", data);
});

dis.dispatch("aa", { name: "jasurbek" });
