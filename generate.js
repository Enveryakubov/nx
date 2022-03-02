#! /usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files');
const fse = require('fs-extra');

const srcDir = `./templates`;
const destDir = `./templates1`;

// To copy a folder or file  
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("success!");
    }
});


generateTemplateFiles([
    {
        option: 'Create microfrontend fragment',
        defaultCase: '(snakeCase)',
        entry: {
            folderPath: `./templates1/ofr-mf-boilerplate`,
        },
        stringReplacers: [{ question: 'Insert microfrontend name', slot: '__name__' }],
        output: {
            path: './Fragment',
            pathAndFileNameDefaultCase: '(snakeCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create microfrontend host',
        defaultCase: '(snakeCase)',
        entry: {
            folderPath: './templates1/ofr-mf-host',
        },
        stringReplacers: [{ question: 'Insert microfrontend name', slot: '__name__' }],
        output: {
            path: './Host',
            pathAndFileNameDefaultCase: '(snakeCase)',
            overwrite: true,
        },
    },
]);