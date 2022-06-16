#!/usr/bin/env node

'use strict'
//require('fs').createReadStream(process.argv[2]).pipe(process.stdout);

// listen for data events from the file stream
require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`));
