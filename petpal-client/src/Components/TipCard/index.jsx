import React from 'react'
import './style.css'

function TipCard() {
  return (
    <div className='tip-card-holder'>
        <div className='tip-card'>
            <div className='tip-info'>
                <h2>House training<img src="../../../dog-icon.png" alt="dog" className='icons'/></h2>
                <span>Dogs thrive on routine and structure, so it's important to establish a regular schedule for feeding, playtime, and potty breaks.</span>
            </div>
            <img src="../../../background.png" alt="dog" className='tip-image'/>
        </div>
        <div className='tip-card'>
            <div className='tip-info'>
                <h2>Title</h2>
                <h3>For:</h3>
                <span>icons</span>
            </div>
            <img src="../../../background.png" alt="dog" className='tip-image'/>
        </div>
        <div className='tip-card'>
            <div className='tip-info'>
                <h2>Title</h2>
                <h3>For:</h3>
                <span>icons</span>
            </div>
            <img src="../../../background.png" alt="dog" className='tip-image'/>
        </div>
        <div className='tip-card'>
            <div className='tip-info'>
                <h2>Title</h2>
                <h3>For:</h3>
                <span>icons</span>
            </div>
            <img src="../../../background.png" alt="dog" className='tip-image'/>
        </div>
        <div className='tip-card'>
            <div className='tip-info'>
                <h2>Title</h2>
                <h3>For:</h3>
                <span>icons</span>
            </div>
            <img src="../../../background.png" alt="dog" className='tip-image'/>
        </div>
        
        
    </div>
  )
}

export default TipCard