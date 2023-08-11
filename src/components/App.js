
import React, { useState } from "react";
import Modal from "./Modal";
import './../styles/App.css';


const App = () => {
  const [content, setContent] = useState(false)
  // const [para, setPara] = useState("")

  function showModal() {
    setContent(!content)
    // setPara("This is the modal content")
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={showModal}>Show Modal</button>
            { content && <Modal />}
        </div>
    </div>
  )
}

export default App
