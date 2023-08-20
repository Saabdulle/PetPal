import { useState } from "react"
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Geocode from "react-geocode";
import { useAuth } from "../../context";
import { useEffect } from 'react';
import './style.css'
import httpClient from "../../httpClient";
Geocode.setApiKey("AIzaSyAf81ZWQurI47K6AtmX9YF8u0YVHX5rQq8")
    Geocode.setLanguage("en");
    Geocode.setRegion("uk")
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

const ServiceProfile = () => {
    const [dogs, setDogs] = useState(false)
    const [cats, setCats] = useState(false)
    const [rabbits, setRabbits] = useState(false)
    const [birds, setBirds] = useState(false)
    const [reptiles, setReptiles] = useState(false)
    const [daycares, setDaycares] = useState(false)
    const [hotels, setHotels] = useState(false)
    const [petsitters, setPetsitters] = useState(false)
    const [dogwalkers, setDogwalkers] = useState(false)
    const [groomers, setGroomers] = useState(false)
    const [vets, setVets] = useState(false)
    const [trainers, setTrainers] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postcode, setPostcode] = useState('')
    const [phone, setPhone] = useState('')
    // const { userId } = useParams()
    const [error, setError] = useState('')
    // const[latitude, setLatitude] = useState('')
    // const [longitude, setLongitude] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const[userId, setUserId] = useState(null)
    // const{user}= useAuth

  useEffect(() => {
       
            async function getUser () {
            const resp = await httpClient.get("http://localhost:5000/user");
            const id = resp.data.id
            setUserId(id)           
        }
  
            getUser()
 
      }, []);

async function handleSubmit(e) {
    
    console.log(userId)
        e.preventDefault()

        const fullAddress = `${address}, ${city}, ${postcode}`
        const res = await  Geocode.fromAddress(fullAddress)
           
        const data = res.results[0].geometry.location;
              console.log(data);

   const latitude = data.lat
    const longitude = data.lng  
              try {
                setError('')
                setLoading(true)
                const options = {
                    method:"POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        sp_id : userId,
                        address :address,
                        city :city,
                        name:name,
                        post_code :postcode,
                        phone :phone ,
                        latitude:latitude,
                        longitude:longitude,
                        dog :dogs,
                        cat :cats,
                        rabbit :rabbits,
                        bird :birds,
                        reptile :reptiles,
                        daily_care :daycares,
                        boarding_hotel :hotels,
                        pet_sitter :petsitters,
                        dog_walker :dogwalkers,
                        vet :vets,
                        grooming :groomers,
                        trainer :trainers
                    })
                }
                const response = await fetch("http://localhost:5000/service-profile", options)
                if (response.status === 201) {
                    const data = await response.json()
                    console.log(data.p_id)
                    // now set user details to user and navigate to main page 
                    // setUser(data.user)
                    // console.log(user)
                    localStorage.setItem("p_id", data.p_id)
                   const id = userId
                    navigate(`/service/profile/${id}`)
              
             }}
            catch (error) {
              setError('Failed to create an account')  
            }
    
            
        //     (error) => {
        //       console.error(error);
        //     }
        //   );

        
        
        setLoading(false)
    }

const handleAddress =()=>{
    
     
   
}


    return (
        <div className='service-profile-creation'>
            <h1>Create your profile</h1><br/><br/>
            <form onSubmit={handleSubmit}>
            <div className='create-service-profile'>
            <div className='provider-info'>
            
            <label htmlFor='username'>
                Company name:
            </label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} name='username' required className='signup-form-element'/>
            <label htmlFor='address'>
                Address:
            </label>
            <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder={"Address"} name='address' required className='signup-form-element'/>
            <label htmlFor='city'>
                City:
            </label>
            <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder={"City"} name='city' required className='signup-form-element'/>
            <label htmlFor='postcode'>
                Postcode:
            </label>
            <input type='text' value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder={"Postcode"} name='postcode' required className='signup-form-element'/>
            <label htmlFor='phone'>
                Phone:
            </label>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={"Phone"} name='phone' required className='signup-form-element'/>
        </div>
        
        <div className='all-filters'>
        <div className='services-filters'>
            <h2 className="services-title">Which services do you provide?</h2>
            <div className="s-filters">
                
                <label>
                    Daycare
                    <input type="checkbox"
                        checked={daycares}
                        onChange={() => setDaycares(!daycares)}>
                    </input>
                </label>
                <label>
                    Boarding hotels
                    <input type="checkbox"
                        checked={hotels}
                        onChange={() => setHotels(!hotels)}>
                    </input>
                </label>
                <label>Pet-sitters
                    <input type="checkbox"
                        checked={petsitters}
                        onChange={() => setPetsitters(!petsitters)}>
                    </input>
                </label>
                <label>Dog walkers<input type="checkbox"
                    checked={dogwalkers}
                    onChange={() => setDogwalkers(!dogwalkers)}></input></label>
                <label>Groomers<input type="checkbox"
                    checked={groomers}
                    onChange={() => setGroomers(!groomers)}></input></label>
                <label>Vets<input type="checkbox"
                    checked={vets}
                    onChange={() => setVets(!vets)}></input></label>
                <label>Trainers<input type="checkbox"
                    checked={trainers}
                    onChange={() => setTrainers(!trainers)}></input></label>
            </div>
            </div>
        <div className='services-filters'>
                <h2 className="animals-title" > Which animals do you accept?</h2>


                <div className="s-filters">
                    <label>Dogs<input type="checkbox"
                        checked={dogs}
                        onChange={() => setDogs(!dogs)}></input></label>
                    <label>Cats<input type="checkbox"
                        checked={cats}
                        onChange={() => setCats(!cats)}></input></label>
                    <label>Birds<input type="checkbox"
                        checked={birds}
                        onChange={() => setBirds(!birds)}></input></label>
                    <label>Rabbits<input type="checkbox"
                        checked={rabbits}
                        onChange={() => setRabbits(!rabbits)}></input></label>
                    <label>Reptiles<input type="checkbox"
                        checked={reptiles}
                        onChange={() => setReptiles(!reptiles)}></input></label>
                </div>

            </div>
        </div>
            </div>
            
            
            
                {/* <button disabled={loading} type='submit'>Submit</button> */}
                <button  onClick={handleAddress}>Submit</button>
            </form>
            
            {error && <p>{error}</p>}
        </div>
    )
}

export default ServiceProfile
