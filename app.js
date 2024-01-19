import glob from 'glob'

const srcDir = process.argv[2]

glob(`${srcDir}/**/*.*`, { ignore: ['*.bck', '**/node_modules/**'] }, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (const filename of files) {
            console.log(filename)
        }
    }
})
