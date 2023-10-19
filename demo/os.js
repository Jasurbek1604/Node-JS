const os = require("os");

console.log("operation system", os.platform());
console.log("Architecture proccessor", os.arch());
console.log("More info about proccessor", os.cpus());
console.log("Free momory", os.freemem());
console.log("Total momory", os.totalmem());
console.log("Home directory", os.homedir());
console.log("Hostname", os.hostname());
console.log("OS type", os.type());
console.log("OS release", os.release());
console.log("OS Uptime", os.uptime());
console.log("User info", os.userInfo());
console.log("User home directory", os.userDir());
