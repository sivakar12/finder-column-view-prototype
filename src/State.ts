import { pathToFileURL } from "url";

export default class State {
    
    path: string[];
    folderTree: object;
    constructor() {
        this.path = ['/']
        this.folderTree =  {
            '/': {
                'folder1': {
                    'folder11': { 'file111': true },
                    'folder12': { 'file121': true },
                    'folder13': { 'file131': true }
                },
                'folder2': {
                    'folder21': { 'file211': true },
                    'file21': true
                }
            }
        }
    }
    
    openFolder(folder: string):void {
        this.path.push(folder)
    }
    goUp(): void {
        this.path.pop()
    }
}