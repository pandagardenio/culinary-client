const fs = require("fs")
const path = require("path")

const getAllFiles = (dirPath, arrayOfFiles) => {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.resolve(__dirname, dirPath, file))
        }
    });
    return arrayOfFiles;
}

const getAllJsonFiles = (dirPath, arrayOfFiles) => getAllFiles(dirPath, arrayOfFiles).map(readJsonFile);

const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8'))

const writeFile = (filePath, content) => fs.writeFileSync(filePath, content, 'utf-8');

module.exports = {
    ...fs,
    getAllFiles,
    getAllJsonFiles,
    readJsonFile,
    writeFile
}