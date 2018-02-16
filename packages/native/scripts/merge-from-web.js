const fs = require('fs-extra');
const { exec } = require('node-exec-promise');
const os = require('os');
const path = require('path');

const sources = ['components', 'state', 'util', 'images'];

async function copySources(sourceDir, destDir, sources) {
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
}

exec('basename `git rev-parse --show-toplevel`').then((out) => {
  const repoName = out.stdout;

  if (!repoName) {
    throw `Didn't find repo name!`;
  }
  const dir = path.join(os.homedir(), `.${repoName.trim()}`);
  console.log(dir);
  fs.removeSync(dir);
  fs.ensureDirSync(dir);

  exec('git rev-parse --short HEAD').then((out) => {
    const sha = out.stdout.trim();

    copySources('src/_corecopy', dir, sources)
      .then(() => {
        exec(
          `cd ${dir}; git init; git add --all; git commit -m "Sources from native at ${sha}"`,
        );
      })
      .then(() => {
        copySources('../frontend/src', dir, sources).then(() => {
          exec(
            `cd ${dir}; git add --all; git commit -m "Sources from web at ${sha}"`,
          );
        });
      });
  });
});
