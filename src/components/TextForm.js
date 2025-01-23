// import React from 'react'
import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        const newText = text.toLocaleUpperCase()
        setText(newText)
        // setText("You have clicked handelUpClick")
    }

    const handleOnChange = (event) =>{
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn.btn.primary" onClick={handelUpClick}>Convert to Uppercase</button>
    </div>
   )
}
