import React, { useState } from 'react'
import _ from 'lodash'

export type ColumnDetails = {
    path: string[]
    content: string[]
    level: number
  }

export default function createState() {
    const [path, setPath] = useState(['/', 'folder1', 'folder12', 'folder121'])
    const [folderTree, setFolderTree] = useState({
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
    })
    function getColumnDetails(): ColumnDetails[] {
        const levels = _.range(path.length)
        const columnDetails = levels.map(level => ({
            level,
            content: getFileListAtLevel(level),
            path: _.take(path, level + 1)
        }))
        return columnDetails 
    }
    
    function getColumnDetailsForLastThreeColumns() {
        return _.takeRight(getColumnDetails(), 3)
    }
    
    function getFileListAtLevel(level: number) {
        const subPath = _.take(path, level + 1)
        const subTree =  _.get(folderTree, subPath)
        return Object.keys(subTree)
    }
    
    function getFileListUptoLevel(index: number) {
        return  _.range(0, index).map(n => 
            getFileListAtLevel(n)
            )
        }
        function changePath(path: string[]) {
            setPath(path)
        }
        
        const context = {
            path,
            getColumnDetails,
            changePath
        }
        return context
    }