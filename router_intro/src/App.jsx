import Header from './components/Header'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import Home from './components/Home'
import Main from './components/Main'
import './App.css'

function App() {

  return (
    <div className = "app">

      <div className = "app-header">
        <Header />
      </div>

      <div className="app-main">
        <Main />
      </div>
      
    </div>
  )
}

export default App
