import React, { useContext } from 'react'
import './Main.css'
import {assets} from "../../assets/assets"
import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'
import { Context } from '../../context/Context'
const Main = () => {

    const {onSend,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p style={{display:"flex",alignItems:"center"}}>
                <img src={assets.gemini_icon} alt="" />Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

        {!showResult ? <>
            <div className="greet">
                <p><span>Hello, Barath.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat?
                        <img src={assets.compass_icon} alt="" />
                    </p>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat?
                        <img src={assets.bulb_icon} alt="" />
                    </p>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat?
                        <img src={assets.message_icon} alt="" />
                    </p>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat?
                        <img src={assets.code_icon} alt="" />
                    </p>
                </div>
            </div>
        </>:
         <div>
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? 
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        
                        
                        
                        }
                        
                    </div>
                </div>


         </div>
        
        }


                       <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter Prompt Here'
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                    value={input}
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       { input && <img src={assets.send_icon} alt=""
                        onClick={()=> onSend()}
                        
                        />
                }
                    </div>
                </div>
                <p className="bottom-info">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa repellendus inventore neque facilis quae. 
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Main
