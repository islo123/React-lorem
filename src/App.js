import React, { useState } from 'react';
import data from './data';


const App = function (){
  const [text, setText] = useState(data)
  const [value, setValue] = useState(0)
  const handleSubmit = function (e){
    e.preventDefault()
    let count = parseInt(value)
    if(count <= 0){
      count = 1
    }
    if(count > 8){
      count = 8
    }
    setText(data.slice(0, count))
  }
  return (
    <div className="section-center">
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={function (e){return setValue(e.target.value)}} type="number"></input>
        <button  type="submit" className="btn">Generate</button>
      </form>
      {text.map(function(teksti, index){
        return (
          <div key={index}>
            <p>{teksti}</p>
          </div>
        )
      })}
    </div>
  )
}


export default App;
