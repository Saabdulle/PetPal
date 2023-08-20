import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'

import { Calendar, ImageUpload, MessageIcon } from '../../Components';

const ServiceProfilePage = () => {

    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState({});
    const {userId} = useParams()
    const navigate = useNavigate()
    const[calendar, setCalendar] = useState()
const[upload, setUpload]= useState(false)
const[isPicture, setIsPicture] = useState(false)
const[isIcon, setIsIcon] = useState(false)
const[logo, setLogo] = useState(false)
    useEffect(() => {

        setLoading(true);
        async function loadProvider() {
console.log(userId)
            const response = await fetch(`http://localhost:5000/services/profile/${userId}`);
            const data = await response.json();
            setProvider(data);
            console.log(data)
            setLoading(false);
            const res = await fetch(`http://localhost:5000/service/calendar/${userId}`)
            if(res.status === 201){
                const dat = await res.json()
                console.log(dat.calendar)
                setCalendar(dat.calendar)
            }
        };

        updateCalendar()
        loadProvider();

    }, [calendar])


    const handleDeleteButton = async () => {
        console.log("in")

        const options = {
        method:"DELETE"
        }
        const response = await fetch(`http://localhost:5000/services/providers/delete/${userId}`, options)
        console.log('response', response)
        if (response.status === 201) {
           
            navigate("/")
        }

    }
    const handleCalendar =async ()=>{
       await setCalendar(!calendar)
      
    }
    const updateCalendar = async ()=>{
        console.log(calendar)
        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sp_id : userId,
                calendar:calendar
            })
        }
        const response = await fetch('http://localhost:5000/service/add-calendar', options)
        const data = await response.json()
console.log(data)
    }

function showUpload(){
    if(logo){setLogo(false)}
setUpload(!upload)
}
function showLogo(){
    if(upload){setUpload(false)}
    setLogo(!logo)
    }
const handleUpload=async()=>{
    setUpload(false)
    const picture = "https://i.ibb.co/Bwq8g9W/daycare2.webp"
    // const picture="https://i.ibb.co/DW5D3SJ/walker2.webp"
    const options = {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            
            picture:picture,
        })
    }
    const response = await fetch(`http://localhost:5000/service/add-picture/${userId}`, options)
    const data = await response.json()
    console.log(data)
 }


 const handleLogoUpload = async()=>{
    setLogo(false)
    const logo = "https://i.ibb.co/0VtjcDk/sitter-icon1.webp"
    // const logo= "https://i.ibb.co/d7syyYr/walker-icon2-2.jpg"
    const options = {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            
            icon:logo,
        })
    }
  
    const response = await fetch(`http://localhost:5000/service/add-icon/${userId}`, options)
    const data = await response.json()
    console.log(data)
 }

    function displayProvider() {
        return (<>
        <div className='profile-card'>
        <div className='picture-holder'>
        <div id='delete-account'>
                <button onClick={handleDeleteButton} >Delete account</button>
            </div>
                   <div className='picture'>
                    <img src={provider.picture? provider.picture:"../../animals.webp"} alt="walker-icon2" border="0"/>
                   </div>
                   </div>
           
        
            <div className='details-and-filters'>
                {/* <h2>Your Company:</h2>     */}
                <div className='provider-info profile-page-details-holder'>
                    <h2 className='company-name'>{provider.name}</h2> 
                    <h3>Address:</h3>
                    <h4>{provider.address }</h4>
                    <h4>{provider.city}</h4>
                    <h4>{provider.postcode}</h4>
                    <h5>Contact number: {provider.phone}</h5> 
                </div>

                <div className='all-services'>
                    <h5>Your services:</h5>
                    <p className="details-holder">
                        
                        { provider.daily_care? <img src="../../daycare.png" alt="daycare" className='icons'/> : ""}
                        { provider.boarding_hotel ? <img src="../../pet-hotel.png" alt="grooming" className='icons'/> : ""}
                        { provider.pet_sitter ? <img src="../../dog_sitter3.png" alt="sitting" className='icons'/> : ""}
                        { provider.dog_walker ? <img src="../../dog_walker.png" alt="walking" className='icons'/> : ""}
                        { provider.grooming ? <img src="../../dog_groomer.png" alt="grooming" className='icons'/> : ""}
                        { provider.vet ? <img src="../../vet.png" alt="vet" className='icons'/> : ""}
                        { provider.trainer ? <img src="../../dog_trainer.png" alt="training" className='icons'/> : ""}

        </p>
        <button className='add-photo-btn' onClick={showUpload}>Add photo</button>
        {upload? <ImageUpload handleUpload={handleUpload} userId={userId} setIsIcon={setIsIcon} setIsPicture= {setIsPicture} upload = {upload}/> : ''}
        <button className='add-photo-btn' onClick={showLogo}>Add logo</button>
        {logo? <ImageUpload handleLogoUpload={handleLogoUpload}  setIsIcon={setIsIcon} setIsPicture= {setIsPicture} logo = {logo}/> : ''}
 
                        {/* <button onClick={() => vote(id, 1)}>+</button>
                        <button onClick={() => vote(id, -1)}>-</button> */}
                        
                    
                    <h5>Animals you provide for:</h5>
                    <p className="details-holder">
                        
                        { provider.dog? <img src="../../dog-icon.png" alt="dog" className='icons'/> : ""}
                        { provider.cat ? <img src="../../cat-icon.png" alt="cat" className='icons'/> : ""}
                        { provider.bird ? <img src="../../bird.png" alt="bird" className='icons'/> : ""}
                        { provider.rabbit ? <img src="../../rabbit.png" alt="rabbit" className='icons'/> : ""}
                        { provider.reptile ? <img src="../../reptile-icon.png" alt="reptiles" className='icons'/> : ""}

                    </p>
                </div>
            </div>
        
        
        
        {/* <button onClick={handleCalendar} className='avail-btn'>Select availability</button>    */}
        <label className='calendar-enable'>{calendar? 'Disable calendar':'Enable calendar'}<input className='calendar-btn' type="checkbox"
                checked={calendar}
                onChange={handleCalendar}
                ></input></label>
   
        <br></br>
    </div>
    
      {calendar? <div className='calendar'><Calendar userId = {userId}/></div>:''}  
    
    <MessageIcon/>
    </>)
    
        
    }

    return loading ? 
        <div className="paw-prints">
            <h2 className='loading'>Loading...</h2>
            <div className="paw-print-1">
               <img className="pad" src="../../../paw.png" alt="paw" />
            </div>
                
            <div className="paw-print-2">
                <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>    
                
            <div className="paw-print-3">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>    
                
            <div className="paw-print-4">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>

            
                
            <div className="paw-print-5">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>
                
            <div className="paw-print-6">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>
                
            <div className="paw-print-7">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>

            <div className="paw-print-8">
            <img src="../../../paw.png" alt="paw" className="pad"/>
            </div>
        </div> 
    : 
    <div className="provider-profile">
        {displayProvider()}
    </div>
    



};

export default ServiceProfilePage;
