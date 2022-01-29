import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('Enter text');
    const handleUpClick = () => {
        console.log('Upper case was clicked ' + text);
        let tempText = text.toUpperCase();
        setText(tempText);
        props.showAlert('Converted to upper case', 'success');
    }
    const handleLoClick = () => {
        console.log('Lower case was clicked ' + text);
        let tempText = text.toLowerCase();
        setText(tempText);
        props.showAlert('Converted to lower case', 'success');

    }
    const handleClearClick = () => {
        console.log('Clear text was clicked ' + text);
        let tempText = '';
        setText(tempText);
        props.showAlert('cleared text', 'success');

    }
    const handleOnChange = (event) => {
        console.log('handle on Change executed');
        console.log(event.target.value);
        setText(event.target.value);
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('text copied', 'success');

    }
    const handlePasteText = ()  => {
        navigator.clipboard.readText().then(function(tempTxt){
            setText(text + tempTxt);
            props.showAlert('text pasted', 'success');

        });

    }
    const handleExtraSpaces = () => {
        let arrText = text.split(/[ ]+/);
        setText(arrText.join(" "));
        props.showAlert('Extra spaces removed', 'success');

    }

    const count = () => {
        let arrText = text.split(/[ ]+/);
        return arrText.length - arrText.filter(x => x==="").length;
    }

    return (
        <>
        <div className='container' style={{color : props.mode==='light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{color : 'black'}} rows="8" value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText} >copy text</button>
            <button className="btn btn-primary mx-1" onClick={handlePasteText} >paste text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color : props.mode==='light'? 'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{count()} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text: 'Enter your text to preview it here'} </p>
        </div>
        </>
    );
}

export {TextForm};