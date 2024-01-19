import glob from 'glob'
import fs from 'fs-extra'
import path from 'path'

const [srcRoot, dstRoot] = process.argv.slice(2)

glob(`${srcRoot}/**/*.*`, { ignore: ['**/node_modules/**'] }, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (const srcName of files) {
            const dstName = srcName.replace(srcRoot, dstRoot)
            const dstDir = path.dirname(dstName)
            console.log(dstName)
            fs.ensureDir(dstDir, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        }
    }
})
