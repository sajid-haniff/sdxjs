import glob from 'glob-promise';
import fs from 'fs-extra-promise';

const statPair = (filename) =>
    fs.statAsync(filename).then(stats => ({ filename, stats }));

const lineCount = (filename) =>
    fs.readFileAsync(filename, 'utf-8').then(data => ({
        filename,
        lines: data.split('\n').length - 1
    }));

const main = async (srcDir) => {
    try {
        const files = await glob(`${srcDir}/**/*.*`);
        const pairs = await Promise.all(files.map(statPair));
        const filtered = pairs
            .filter(pair => pair.stats.isFile())
            .map(pair => pair.filename);
        const counts = await Promise.all(filtered.map(lineCount));
        counts.forEach(({ filename, lines }) => console.log(`${lines}: ${filename}`));
    } catch (err) {
        console.error('Error:', err.message);
    }
};

const srcDir = process.argv[2];
main(srcDir);
