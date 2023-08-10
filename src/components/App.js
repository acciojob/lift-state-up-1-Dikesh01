
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [content, setContent] = useState("")
  const [para, setPara] = useState("")

  function showModal() {
    setContent("Modal Content")
    setPara("This is the modal content")
  }
  return (
    <div className="parentCls">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="childCls">
            <h2>Child Component</h2>
            <button onClick={showModal}>Show Modal</button>
            <h3>{content}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default App
