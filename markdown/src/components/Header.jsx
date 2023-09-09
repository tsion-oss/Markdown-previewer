import { useState } from "react"

export default function Header () {
  const [toggle, setToggle] = useState(false)

  const toggleFunction = () => {
    console.log('hey')
    setToggle(!toggle)
  }
    return(

  <div>
    <header>
        <h1>Markdown Previewer</h1>
        <button onClick={toggleFunction}>Markdown Cheat Sheet</button>
    </header>
    {toggle && (
    <div className="toggleBox">
        <h1>Markdown Cheat Sheet</h1>
        <ul>
            <li># H1</li>
            <li>## H2</li>
            <li>### H3</li>
            <li>**bold**</li>
            <li>*italic*</li>
            <li>[Link](http://a.com)</li>
            <li>![Image](http://url/a.png)</li>
            <li>`inline code`</li>
            <li>```block code```</li>
            <li>- list item</li>
        </ul>
    </div>
    )}

    </div>  
      
    )
}