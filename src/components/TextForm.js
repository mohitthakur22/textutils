import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase !", "success")
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase !", "success")
    }

    const handleClearClick = () => {
        console.log("Clear text was clicked")
        let newText = ("")
        setText(newText)
        props.showAlert("Text was cleared !", "success")
    }
    
    const handleSentenceClick = () => {
        console.log("Sentence case was clicked")
        let newText = text.split(". ").map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(". ")
        setText(newText)
        props.showAlert("converted to sentence case !", "success")
    }

    const handleCapitalClick = () => {
        console.log("Capital case was clicked")
        let newText = text.split(' ').map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ')
        setText(newText)
        props.showAlert("converted to capital case !", "success")
    }

    const handleRemoveSpaceClick = () => {
        console.log("Remove extra spaces was clicked")
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText)
        props.showAlert("Extra spaces was removed !", "success")
    }


    const handleCopyClick = () => {
        console.log("Copy text was clicked")
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleCutClick = () => {
        console.log("Cut text was clicked")
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Text was cut off !", "success");
        text.value = ("");
    }
    

    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-3'   style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className='form-control'  value={text}  style={{backgroundColor: props.mode==='dark'?'rgb(52 53 65)':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Sentence case</button>
                <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capital case</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCutClick}>Cut Text</button>
            </div>
            <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the text box above to preview"}</p>
            </div>
        </>
    )
}
