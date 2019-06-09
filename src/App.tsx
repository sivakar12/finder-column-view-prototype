import React from 'react'
import logo from './logo.svg'
import './App.css'
import Context from './Context'
import State from './State'

const App: React.FC = () => {

  return (
    <Context.Provider value={new State()}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Context.Provider>
  )
}

export default App
