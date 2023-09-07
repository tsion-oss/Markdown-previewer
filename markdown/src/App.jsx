import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

function App() {


  return (
    <div>
      <header>
        <h1>Markdown Previewer</h1>
        <button>Markdown Cheat Sheet</button>
      </header>
      <div style={{ display: 'flex'}}>
          <Editor/>
          <Preview/>
     </div>
    </div>
  )
}

export default App
