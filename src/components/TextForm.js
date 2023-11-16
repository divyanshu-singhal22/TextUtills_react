import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleClick =() =>{
        console.log("Button Was clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleClickLC =() =>{
        console.log("Button Was clicked", text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClickA =() =>{
        console.log("Button Was clicked", text);
        let newText = text.replace("ABC", "Angular")
        setText(newText)
    }
    const handleOnChange =(event) =>{
        console.log("Button Was clicked")
        setText(event.target.value);
    }
const [text, setText] = useState('');
  return (
    <>
    <div  className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myTextArea" className="form-label">{props.heading}</label>
            <textarea className="form-control" onChange={handleOnChange} value={text} style= {{backgroundColor: props.mode=== 'dark'?'grey': 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClick}>Covert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClickLC}>Covert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClickA}>Append</button>
    </div>
    <div className="container my-3 ">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
