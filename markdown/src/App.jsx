import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div>
     <Header/>
      <div style={{ display: 'flex'}}>
          <MarkdownInput/>
          <MarkdownOutput/>
     </div>
    </div>
  )
}

export default App
