import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick=(e)=>{
        e.preventDefault();
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=(e)=>{
        e.preventDefault();
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        console.log("handleOnChange");
        setText(event.target.value);}
        const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h2>{props.heading}</h2>
            <form>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}}rows="8"></textarea>
                </div>

                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </form>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} chracters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        

        </>
    )
}
