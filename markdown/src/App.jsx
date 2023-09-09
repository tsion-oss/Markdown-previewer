import Editor from './components/MarkdownGuide'
import Preview from './components/MarkdownInput'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div>
     <Header/>
      <div style={{ display: 'flex'}}>
          <Editor/>
          <Preview/>
     </div>
    </div>
  )
}

export default App
