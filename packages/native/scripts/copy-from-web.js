const fs = require('fs-extra');

const sourceDir = '../frontend/src';
const destDir = 'src/_corecopy';
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
