import _ from 'lodash'

export type ColumnDetails = {
    path: string[]
    content: string[]
    level: number
}

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

    getColumnDetails(): ColumnDetails[] {
        const levels = _.range(this.path.length)
        const columnDetails = levels.map(level => ({
            level,
            content: this.getFileListAtLevel(level),
            path: _.take(this.path, level + 1)
        }))
        return columnDetails 
    }
    
    getColumnDetailsForLastThreeColumns() {
        return _.takeRight(this.getColumnDetails(), 3)
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
    changePath(path: string[]) {
        this.path = path
        console.log('Path set to ' + path)
    }
}