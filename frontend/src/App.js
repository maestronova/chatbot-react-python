import React from 'react'
import { useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import Chatbox from "./component/chatbox/chatbox"

function App() {
  return (
    <div>
      {/* <FontAwesomeIcon
        icon={faRocketchat}/> */}
      <Chatbox
        isActive={true}/>
    </div>
    
  )
}

export default App;