import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarUser } from '../../Components';
import { useAuth } from '../../context';

import './style.css'

const ProviderPage = () => {

    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState({});
    const {id} = useParams()
    const [isCalendar, setIsCalendar] = useState(false)
    const{user_id} = useAuth()

    useEffect(() => {

        setLoading(true);
        async function loadProvider() {

            const response = await fetch(`http://localhost:5000/services/profile/${id}`);
            const data = await response.json();
            setProvider(data);
            console.log(data)
            setLoading(false);
        };

        async function checkCalendar(){
            const response = await fetch(`http://localhost:5000/service/calendar/${id}`);
            if (response.status===201){
                const data = await response.json()
                console.log(data.calendar)
                setIsCalendar(data.calendar)
            }
        }
        checkCalendar()
        loadProvider();

    }, [])

    function displayProvider() {
        return <>
        <div className=''>
            <div id='back-btn'>
                        <Link to="/services/filter/all"> <button>Back</button> </Link> 
                        </div>
            <div className='sp-user-view'>
            
            
            <div className='profile-card' id='user-view'>
                   <div className='picture-holder'>
                   <div className='picture'>
                    <img src={provider.picture? provider.picture:"../../animals.webp"} alt="walker-icon2" border="0"/>
                   </div>
                   </div>
                   {/* <img clasName='icon' src={icon? icon:"../../petpal-logo.jpg"} alt="walker-icon2" border="0"/> */}
                    <div className='details-and-filters'>
                        <div className='provider-info profile-page-details-holder'>
                                <h3 className='company-name'>{provider.name}</h3>
                                <h4>{provider.address }</h4>
                                <h4>{provider.city}</h4>
                                <h4>{provider.postcode}</h4>
                                <h5>Contact us: {provider.phone}</h5> 
                            </div>
                        
                        <div className='all-services'>
                            <h5>Our services:</h5>
                            <p className="details-holder">
                                
                                { provider.daily_care? <img src="../../daycare.png" alt="daycare" className='icons'/> : ""}
                                { provider.boarding_hotel ? <img src="../../pet-hotel.png" alt="grooming" className='icons'/> : ""}
                                { provider.pet_sitter ? <img src="../../dog_sitter3.png" alt="sitting" className='icons'/> : ""}
                                { provider.dog_walker ? <img src="../../dog_walker.png" alt="walking" className='icons'/> : ""}
                                { provider.grooming ? <img src="../../dog_groomer.png" alt="grooming" className='icons'/> : ""}
                                { provider.vet ? <img src="../../vet.png" alt="vet" className='icons'/> : ""}
                                { provider.trainer ? <img src="../../dog_trainer.png" alt="training" className='icons'/> : ""}

                                {/* <button onClick={() => vote(id, 1)}>+</button>
                                <button onClick={() => vote(id, -1)}>-</button> */}
                                
                            </p>
                            <h5>Animals we provide for:</h5>
                            <p className="details-holder">
                                
                                    { provider.dog? <img src="../../dog-icon.png" alt="dog" className='icons'/> : ""}
                                    { provider.cat ? <img src="../../cat-icon.png" alt="cat" className='icons'/> : ""}
                                    { provider.bird ? <img src="../../bird.png" alt="bird" className='icons'/> : ""}
                                    { provider.rabbit ? <img src="../../rabbit.png" alt="rabbit" className='icons'/> : ""}
                                    { provider.reptile ? <img src="../../reptile-icon.png" alt="reptiles" className='icons'/> : ""}

                            </p>
                        </div>
                    
                    </div>
                    

                    <button onClick={handleSubmit}>Message</button>
                <br></br>
            </div>
            
            {isCalendar? <div className='calendar'><CalendarUser userId={id}/></div>:''}
            
            </div>
            
            
        </div>
        
    </>
            
        
    }
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id)
    console.log(user_id)
    try {
        const response = await fetch('http://localhost:5000/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: user_id,
            service_id: id
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error);
        }
        console.log(data.message);
        // do something with the success message
      } catch (error) {
        console.error(error);
        // do something with the error message
      }
  };


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
    : displayProvider();

};

export default ProviderPage;
