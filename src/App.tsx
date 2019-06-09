import React from 'react'
import Context from './StateContext'
import State from './State'
import ColumnView from './ColumnView'

const App: React.FC = () => {

  return (
    <Context.Provider value={new State()}>
      <ColumnView/>
    </Context.Provider>
  )
}

export default App
