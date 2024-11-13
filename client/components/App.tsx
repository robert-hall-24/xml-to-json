import JsonBox from './UI Elements/JsonBox'
import XmlBox from './UI Elements/XmlBox'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-slate-600 align-middle">
      <div className="col-start-2">
        <h2>XML Data</h2>
        <XmlBox text={text} onChange={handleChange} />
      </div>
      <div className="col-start-3">
        <h2>JSON Data</h2>
        <JsonBox text={text} />
      </div>
      <div className="col-start-3 row-start-2">8</div>
      <div className="col-start-2 row-start-2">9</div>
      <div className="col-start-3 row-start-3">11</div>
      <div className="col-start-2 row-start-3">12</div>
    </div>
  )
}

export default App
