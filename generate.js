#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files');
const { execSync } = require("child_process")

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: "inherit" })
    } catch (e) {
        console.log(e)
        return false
    }
    return true
}

const gitCloneTemplate = `git clone https://github.com/Enveryakubov/templates.git`

runCommand(gitCloneTemplate)

generateTemplateFiles([
    {
        option: 'Create microfrontend fragment',
        defaultCase: '(snakeCase)',
        entry: {
            folderPath: `./templates/ofr-mf-boilerplate`,
        },
        stringReplacers: [{ question: 'Insert microfrontend name', slot: '__name__' }],
        output: {
            path: './__name__',
            pathAndFileNameDefaultCase: '(snakeCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create microfrontend host',
        defaultCase: '(snakeCase)',
        entry: {
            folderPath: './templates/ofr-mf-host',
        },
        stringReplacers: [{ question: 'Insert microfrontend name', slot: '__name__' }],
        output: {
            path: './__name__',
            pathAndFileNameDefaultCase: '(snakeCase)',
            overwrite: true,
        },
    },
]);