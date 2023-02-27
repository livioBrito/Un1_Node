const fs = require('fs');

function getSubdirectories(path) {
  return readdir(path)
    .then(files => {
      const promises = files.map(file => {
        const fullPath = `${path}/${file}`;
        return stat(fullPath)
          .then(stats => {
            if (stats.isDirectory()) {
              return fullPath;
            } else {
              return Promise.resolve();
            }
          });
      });
      return Promise.all(promises);
    })
    .then(results => {
      return results.filter(result => result !== undefined);
    });
}

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
}
