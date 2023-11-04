import React from 'react'
import "./RightSidebar.css"
import pen from "../../assets/pen-solid.svg"
import comment from "../../assets/comment-alt-solid.svg"
import blacklogo from "../../assets/blacklogo.svg"

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width="18" />
                <p>Is AI enough to increase your productivity?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width="18" />
                <p>The company making it easier to turn your coffee machine into a robot</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18" />
                <p>If more users could vote, would they engage more? Testing 1 reputation voting...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18" />
                <p>Practical effects of the October 2023 layoff</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="pen" width="18" />
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="pen" width="18" />
                <p>Expanding Discussions: Let's talk about curation</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="pen" width="18" />
                <p>Update on Collectives and Discussions</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>15</p>
                <p>Does "I tried external tool T" turns a question into requesting external...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>21</p>
                <p>A low-quality question was edited by the poster to consist of insults, then...</p>
            </div>
        </div>
    </div>
  )
}

export default Widget