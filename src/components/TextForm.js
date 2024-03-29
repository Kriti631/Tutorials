import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upper case', 'success');
}
  const handleLowClick= ()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert('Converted to lower case', 'success');
}
const handleClearClick= ()=>{
  let newText = '';
  setText(newText);
}
const handleOnChange=(event)=> {
   // console.log('On change');
    setText(event.target.value);
}
    const [text, setText]= useState('');

  return (
      <>
      <div className='container' style={{color: props.mode=== 'dark'?'white':'#0d0e21'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      {/* <label for="myBox" class="form-label">Example textarea</label> */}
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button> 
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      </div>
      <div className='container my-3' style={{color: props.mode=== 'dark'?'white':'#0d0e21'}}>
      <h2>Your text summary</h2>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0? text: 'Enter something to preview it here'}</p>

</div>
</>
  )
}
