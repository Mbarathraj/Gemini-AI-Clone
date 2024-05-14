import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from "../../assets/assets"
import { Context } from '../../context/Context';
const Sidebar = () => {

    let [collapse,setCollapse]=useState(false);
    const {onSend,prevPrompts,setRecentPrompt,newChat}=useContext(Context)
    const loadPrompt= async(prompt)=>{
      setRecentPrompt(prompt)
      await onSend(prompt);
    }
  return (
    <div className='sidebar'>
      <div className="top">
            <img src={assets.menu_icon} alt="" className='menu'
            onClick={()=> setCollapse((pre) => !pre)}
            />
            <div className="new-chat" onClick={()=> newChat()}>
                <img src={assets.plus_icon} alt="" />
                {collapse &&<p>New Chat</p>}
            </div>   
                    {collapse && 
                    <div className="recent">
                     <p className='recent-title'>Recent</p>
                      {prevPrompts.map((value,index)=>{
                      return (
                        <div className="recent-entry" onClick={()=>{loadPrompt(value)}}>
                        <img src={assets.message_icon} alt="" />
                         <p>{value.slice(0,18)}...</p>
                        </div>
                      )
                    })}
                    </div>
                    }
                
            
      </div>
      <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
               {collapse && <p>Help</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {collapse &&<p>Activity</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {collapse &&<p>Setting</p>}
            </div>
            
      </div>
    </div>
  )
}

export default Sidebar
