const fs = require('fs-extra');

const sourceDir = 'src/_corecopy';
const destDir = '../frontend/src';
const sources = ['components', 'state', 'util', 'images'];

const all = sources.map(
  (source) =>
    new Promise((res, rej) => {
      try {
        fs.copy(`${sourceDir}/${source}`, `${destDir}/${source}`, {
          overwrite: true,
        });
        res();
      } catch (e) {
        rej(e);
      }
    }),
);

Promise.all(all)
  .then(() => console.log('success!'))
  .catch((err) => console.error(err));
