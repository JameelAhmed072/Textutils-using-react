import React,{useState} from 'react'

export default function TextForm(props) {


    const [text, setText] = useState('');

    const handleUpClick = () =>{
      console.log("Upper case was clicked!");
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase",'success');
    }
  
      const handleOnChange = (event) =>{
      // console.log("On Change!");
      setText(event.target.value)
    }
  
    const handleClearClick = () =>{
      let newText = '';
      setText(newText)
      props.showAlert("Clearned the text area",'success');
  
    }
  
    const handleReverseClick = () =>{
      let newText = text.split('');
      let reverseString = newText.reverse();
      let newString = reverseString.join("");
      setText(newString);
      props.showAlert("Text has been reveresed",'success');
  
    }
  
    const handleCopyClick = () =>{
      let text = document.getElementById('mybox');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied",'success');
  
  
  
    }
  
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
  
    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
      props.showAlert("File has been downloaded",'success');
  
  }
  
  
  
  
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase",'success');
  
    }



  return (
<>
    

    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2 >{props.heading}</h2>
        <div className='mb-3'>
          <br />
          <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor:props.mode ==='dark'? 'grey':'white',color: props.mode ==='dark'? 'white':''}} id="mybox" cols="140" rows="8"></textarea>
          <br />
          <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase </button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Case</button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
          <button className="btn btn-primary" onClick={downloadTxtFile}  style={{property:"value"}}>Download Text</button>


        </div>  
    </div>
    <div className='container my-3' style={{color:props.mode ==='dark'? 'white':'black'}}>
      <h2>Your text summary here</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes will take for its reading</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preview it'}</p>

    </div>
    </>
  )
}
