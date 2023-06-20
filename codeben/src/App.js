import React, { useState } from "react";

const CodePenClone = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  const handleHtmlChange = (event) => {
    setHtml(event.target.value);
  };

  const handleCssChange = (event) => {
    setCss(event.target.value);
  };

  const handleJsChange = (event) => {
    setJs(event.target.value);
  };


  const handleRunClick = () => {
    const iframe = document.createElement("iframe");
    iframe.srcdoc = `<html><style>${css}</style><body>${html}<script>${js}</script></body></html>`;
    iframe.onload = () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      setOutput(doc.body.innerHTML);
    };
    iframe.sr
    setOutput("");
    document.body.appendChild(iframe);
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 0);
  };
  
  const handleDownload = () => {
    const code = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'codepen_clone.doc';
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div style={{background:"black", color:"white"}}>
      <div style={{background:"grey", alignItems:"center"}}>
        <h1 style={{textAlign:"center"}}>Code Pen</h1>
      </div>
      
      <div style={{display:"flex", gap:"20%", marginLeft:"2%"}}>
      <div>
        <h2>HTML</h2>
        <textarea rows={20} style={{width:"200%"}} value={html} onChange={handleHtmlChange} />
      </div>
      <div>
        <h2>CSS</h2>
        <textarea rows={20} style={{width:"200%"}} value={css} onChange={handleCssChange} />
      </div>
      <div>
        <h2>JavaScript</h2>
        <textarea rows={20} style={{width:"200%"}} value={js} onChange={handleJsChange} />
      </div>
      </div>
      <div>
        <button style={{height:"16%", width:"14%", background:"green", marginLeft:"40%"}} onClick={handleRunClick}>Run</button>
        <button onClick={handleDownload}>Download Code</button>
      </div>
      <div style={{background:"white", color:"black"}}>
        <h2>Output</h2>
        <iframe style={{width:"80%"}} srcDoc={`<html><style>${css}</style><body>${html}<script>${js}</script></body></html>`} />
        <div dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
};

export default CodePenClone;
