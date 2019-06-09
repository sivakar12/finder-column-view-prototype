import _ from 'lodash'

export default class State {
    
    path: string[];
    folderTree: object;
    constructor() {
        this.path = ['/', 'folder1', 'folder12', 'folder121']
        this.folderTree =  {
            '/': {
                'folder1': {
                    'folder11': { 'file111': true },
                    'folder12': { 
                        'folder121': {
                            'file1211': true
                        } 
                    },
                    'folder13': { 'file131': true }
                },
                'folder2': {
                    'folder21': { 'file211': true },
                    'file21': true
                }
            }
        }
    }

    getFileListAtLevel(level: number) {
        const path = _.take(this.path, level + 1)
        const subTree =  _.get(this.folderTree, path)
        return Object.keys(subTree)
    }

    getFileListUptoLevel(index: number) {
        return  _.range(0, index).map(n => 
            this.getFileListAtLevel(n)
        )
    }
    
    openFolder(folder: string):void {
        this.path.push(folder)
    }
    goUp(): void {
        this.path.pop()
    }
}