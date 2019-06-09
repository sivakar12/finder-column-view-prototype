import React from 'react'
type ColumnDetails = {
    path: string[]
    content: string[]
    level: number
  }
type StateContext = {
    path: string[]
    changePath(path: string[]): void
    getColumnDetails(): ColumnDetails[]
}

export default React.createContext<StateContext>({
    path: ['daf'],
    changePath(path) {},
    getColumnDetails() { return []}
})