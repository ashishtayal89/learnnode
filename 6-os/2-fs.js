/*

  readFile(path[, options])
  createReadStream(path[, options])

  writeFile(file, data[, options])
  createWriteStream(path[, options])

  appendFile(path, data[, options])
  copyFile(src, dest[, flags])
  stat(path[, options])
  access(path[, mode]), chmod(path, mode), chown(path, uid, gid)
  link(existingPath, newPath), unlink(path)
  truncate(path[, len])

  mkdir(path[, mode])
  readdir(path[, options])
  rmdir(path)
  rename(oldPath, newPath)

*/
const fs = require("fs");
const fsPromise = fs.promises;
let readStream = fs.createReadStream("index.txt");
readStream.on("data", stream => {
  console.log(stream.toString());
});
fs.readFile("index.txt", (err, buffer) => {
  console.log(buffer.toString());
});
fsPromise.readFile("index.txt").then(buffer => console.log(buffer.toString()));
