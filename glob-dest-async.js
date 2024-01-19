import glob from 'glob';
import fs from 'fs-extra';
import path from 'path';
import { promisify } from 'util';

const globAsync = promisify(glob);
const statAsync = promisify(fs.stat);

const processFiles = async () => {
  const [srcRoot, dstRoot] = process.argv.slice(2);

  try {
    const files = await globAsync(`${srcRoot}/**/*.*`, { ignore: '[**node_modules**]' });
    await Promise.all(files.map(async (srcName) => {
      try {
        const stats = await statAsync(srcName);
        if (stats.isFile()) {
          const dstName = srcName.replace(srcRoot, dstRoot);
          const dstDir = path.dirname(dstName);

          console.log(dstName)
          //await fs.ensureDir(dstDir);
          //await fs.copy(srcName, dstName);
        }
      } catch (err) {
        console.error(err);
      }
    }));
  } catch (err) {
    console.error(err);
  }
};

processFiles();
