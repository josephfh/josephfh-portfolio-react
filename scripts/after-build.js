var fs = require("fs");
var indexFile = "./build/index.html";
var comment = `
▒█████   ██░ ██     ██░ ██ ▓█████  ██▓     ██▓     ▒█████
▒██▒  ██▒▓██░ ██▒   ▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    ▒██▒  ██▒
▒██░  ██▒▒██▀▀██░   ▒██▀▀██░▒███   ▒██░    ▒██░    ▒██░  ██▒
▒██   ██░░▓█ ░██    ░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    ▒██   ██░
░ ████▓▒░░▓█▒░██▓   ░▓█▒░██▓░▒████▒░██████▒░██████▒░ ████▓▒░
░ ▒░▒░▒░  ▒ ░░▒░▒    ▒ ░░░▒▒░░ ▒░ ░░ ▒░▓  ░░ ▒░░  ░░ ▒░▒░▒░
  ░ ▒ ▒░  ▒ ░▒░ ░    ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░  ░ ▒ ▒░
░ ░ ░ ▒   ░  ░░ ░    ░  ░░ ░   ░     ░ ░     ░ ░   ░ ░ ░ ▒
    ░ ░   ░  ░  ░    ░  ░  ░   ░  ░    ░  ░    ░  ░    ░ ░

  Want to see the source code?
`;
fs.readFile(indexFile, "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/<head>/g, `<head>\n<!--\n${comment}\n-->\n`);

  fs.writeFile(indexFile, result, "utf8", function(err) {
    if (err) return console.log(err);
  });
});
