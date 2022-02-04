// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";



const InputEditor = ({ value, onInputChange }) => {
  const onLoad = () => {
    console.log("input editor loaded");
  };

const download = ()=>{
  var fileName = "myfile.txt";
  var fileContent = value.toString();
  console.log(value);
  var myFile = new Blob([fileContent], { type: 'text/plain' });

  window.URL = window.URL || window.webkitURL;
  var dlBtn = document.getElementById("download");

  dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
  dlBtn.setAttribute("download", fileName);
}

console.log(value.toString())
  return (
    <div>
      <AceEditor
        className="inputeditor"
        placeholder="Input Parameters"
        mode="python"
        theme="monokai"
        name="input_editor"
        onLoad={onLoad}
        onChange={onInputChange}
        fontSize={14}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default InputEditor;
