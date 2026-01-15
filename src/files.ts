import fs from 'fs';
import path from 'path'

export const getFiles = (folderPath: string) => {

    let response: string[] = []

    const allFilesFolders = fs.readdirSync(folderPath);
    allFilesFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file);
        if (fs.statSync(fullFilePath).isDirectory()) {
            response = response.concat(getFiles(fullFilePath));
        } else {
            response.push(fullFilePath)
        }
    })

    return response;

}    
