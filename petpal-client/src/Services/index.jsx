import { useState, useEffect, useCallback } from "react"
import React  from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindow} from '@react-google-maps/api';
import * as geolib from 'geolib'
import { Filters, ProviderCard } from "../Components"
import "./index.css"
import { useParams } from "react-router-dom";

const mapContainerStyle= {
    width: "100%",
    height:"100%"
}
const cent={lat:51.553742, lng: 0.201989}


const Services = () => {
const[selected, setSelected] = useState(null)
const[zoom, setZoom] = useState(13)
const [center, setCenter] = useState(cent)
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
const{id} = useParams()
const[filteredSevices, setFilteredServices] = useState(null)

    function Map() {
        return (
          <LoadScript
            googleMapsApiKey = "AIzaSyAf81ZWQurI47K6AtmX9YF8u0YVHX5rQq8"
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={zoom}
              >
              { 
              serviceProviders
              .filter(s=> !daycares || s.daily_care)
              .filter(s=> !hotels || s.boarding_hotel)
              .filter(s =>!petsitters || s.pet_sitter)
              .filter(s=> !dogwalkers || s.dog_walker)
              .filter(s=> !groomers || s.grooming)
              .filter(s=> !vets || s.vet)
              .filter(s=> !trainers || s.trainer)
              .filter(s=> !dogs || s.dog)
              .filter(s=> !cats || s.cat)
              .filter(s=> !birds || s.bird)
              .filter(s=> !rabbits || s.rabbit)
              .filter(s=> !reptiles || s.reptile).map((p)=>(
                <MarkerF key={p.id} position={{lat: p.latitude, lng: p.longitude}}
                onClick={()=>{setSelected(p), setZoom(13), setCenter({lat: p.latitude, lng: p.longitude}) }}
                icon={{url:"../../mapmarker.png", scaledSize: new window.google.maps.Size(30,30)}} />
              ))}
              <></>
              {selected && (
                <InfoWindow position={{lat: selected.latitude, lng: selected.longitude}}
                onCloseClick={()=>{setSelected(null)}}>
                    <div>
                      <h4>{selected.name}</h4>
                      <h4>{selected.address}</h4>
                      <h4>{selected.postcode}</h4>
                      
                      </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        )
      }
      
    
 
const home={latitude:51.553742, longitude: 0.201989}
    const [serviceProviders, setServiceProviders]= useState([])

    useEffect(() => {
        async function loadServices(){
            const response = await fetch("http://localhost:5000/services")
            const data = await response.json()
            console.log(data)
            const prov=geolib.orderByDistance(home, data.services)
            console.log(prov)
            setServiceProviders(prov)
        }
        const setService=()=>{
          console.log(id)
          if (id == 1){
           setDaycares(true)
           setHotels(true)
           setPetsitters(true)
          } else if(id=="all"){
            console.log("all services")
          }else if(id == 2){
            setDogwalkers(true)
          }else if(id == 3 ){
            setGroomers(true)
          }else if(id==4){
            setVets(true)
          }else if(id == 5){
            setTrainers(true)
          }
        }
        setService()
        loadServices()
        
    }, [])



function displayProviders() {
   
    return serviceProviders
                    .filter(s=> !daycares || s.daily_care)
                    .filter(s=> !hotels || s.boarding_hotel)
                    .filter(s =>!petsitters || s.pet_sitter)
                    .filter(s=> !dogwalkers || s.dog_walker)
                    .filter(s=> !groomers || s.grooming)
                    .filter(s=> !vets || s.vet)
                    .filter(s=> !trainers || s.trainer)
                    .filter(s=> !dogs || s.dog)
                    .filter(s=> !cats || s.cat)
                    .filter(s=> !birds || s.bird)
                    .filter(s=> !rabbits || s.rabbit)
                    .filter(s=> !reptiles || s.reptile)
                    .map(s => <ProviderCard key={s.id} id={s.id} name={s.name}
                        address={s.address} city={s.city} icon = {s.icon? s.icon: null}
                        postcode={s.postcode} phone={s.phone} dog={s.dog} cat={s.cat} rabbit={s.rabbit}bird={s.bird}reptile={s.reptile}daycare={s.daily_care} hotel={s.boarding_hotel}petsitter={s.pet_sitter}dogwalker={s.dog_walker}groomer={s.grooming}vet={s.vet}trainer={s.trainer}
                        />)
}
  return (
    <main className="provider-main">
      {/* <div className='filters-and-results'> */}
        <div className="which-service-title">
          <h1 >Find a Service</h1>
          <h2>Filter by:</h2>
          <Filters dogs={dogs} setDogs={setDogs}cats={cats} setCats={setCats}rabbits={rabbits} setRabbits={setRabbits}birds={birds}setBirds={setBirds} reptiles={reptiles}setReptiles={setReptiles}daycares={daycares} setDaycares={setDaycares}hotels={hotels} setHotels={setHotels}petsitters={petsitters}setPetsitters={setPetsitters}dogwalkers={dogwalkers} setDogwalkers={setDogwalkers}groomers={groomers}setGroomers={setGroomers}vets={vets} setVets={setVets} trainers={trainers} setTrainers={setTrainers}/>
      
        </div>
        <div className='cards-div'>
            <div className="card-holder">
                { displayProviders() }
            </div>
        </div>
        
      
        <div className="map">
            <Map/>
        </div>
      {/* </div> */}
    </main>
  )
}

export default Services

// const providers=[{
//     "serviceName":"Mina",
// "serviceEmail": "ark@gmail.com",
// "servicePassword": "123"

//     "sp_id":1,
//     "name": "CYpress",
//     "address":"127, Albany Road",
//     "city": "Hornchurch",
//     "post_code": "RM12 4AQ",
//     "phone":"12345",
//     "latitude":51.560351,
//     "longitude":0.196177,
//     "dog": true,
//     "cat":true,
//     "rabbit":true,
//     "bird":false,
//     "reptile":false,
//     "daily_care":false,
//     "boarding_hotel": false,
//     "pet_sitter": false,
//     "dog_walker": false,
//     "vet":true,
//     "grooming": false,
//     "trainer": false,
//     "icon": "https://i.ibb.co/F5Z3qvC/vet4.jpg",
//     "picture": "https://i.ibb.co/72m5LVJ/vet2.jpg",
   
//     },{
//         "serviceName":"Gina",
//    "serviceEmail": "gina@gmail.com",
// "servicePassword": "123"

//         "sp_id":2,
//     "name": "Gina",
//     "address":"138, Upper Rainham Road",
//     "city": "Hornchurch",
//     "post_code": "RM12 4AQ",
//     "phone": "12345",
//      "latitude":51.561068,
//     "longitude":0.188231,
//     "dog": true,
//     "cat": false,
//     "rabbit": true,
//     "bird":false,
//     "reptile": true,
//     "daily_care": true,
//     "boarding_hotel": false,
//     "pet_sitter":true,
//     "dog_walker":false,
//     "vet": false,
//     "grooming": false,
//     "trainer":true,
//   "icon": "https://i.ibb.co/PGr9Qy2/sitter-icon2.jpg",
//     "picture": "https://i.ibb.co/26dHRFG/sitter1.png"
   
//     },{
//         "serviceName":"Lina",
//     "serviceEmail": "bb@gmail.com",
// "servicePassword": "123"
//         "sp_id":3,
//     "name": "Top Dog",
//     "address": "300 Hornchurch Road",
//     "city": "Hornchurch",
//     "post_code": "RM11 1PY",
//     "phone":"344556",
//     "latitude":51.566099,
//     "longitude":0.191953,
//     "dog": true,
//     "cat":true,
//     "rabbit": false,
//     "bird": true,
//     "reptile": true,
//     "daily_care": false,
//     "boarding_hotel": true,
//     "pet_sitter": false,
//     "dog_walker": false,
//     "vet": true,
//     "grooming": true,
//     "trainer": false,
//   "icon": "https://i.ibb.co/42kh84p/hotel-icon2.jpg",
//     "picture": "https://i.ibb.co/Tb2mh7k/hotel2.jpg",

//     },{
//  "serviceName":"Pina",
//     "serviceEmail":"paf@gmail.com",
//   "servicePassword": "123"
//         "sp_id":4,
//     "name": "Paws and fur",
//     "address": "156 Suttons Avenue",
//     "city": "Hornchurch",
//     "post_code": "RM12 4LY",
//     "phone":"659639",
//     "latitude":51.556175,
//     "longitude": 0.210287,
//     "dog": true,
//     "cat": true,
//     "rabbit": true,
//     "bird": false,
//     "reptile": false,
//     "daily_care": false,
//     "boarding_hotel": false,
//     "pet_sitter":false,
//     "dog_walker":false,
//     "vet":false,
//     "grooming": true,
//     "trainer":false,
//   "icon": "https://i.ibb.co/Kh953Fz/grooming-icon2.png",
//     "picture": "https://i.ibb.co/HBt4jFD/grooming2.jpg",

//     },{
//  "serviceName":"Nina",
//     "serviceEmail":"remy@gmail.com",
//   "servicePassword": "123"
//         "sp_id":5,
//     "name": "Hound Crew",
//     "address":"89 Coronation Drive",
//     "city": "Hornchurch",
//     "post_code": "RM12 5BT",
//     "phone":"63252342",
//     "latitude":51.548223,
//     "longitude":0.199816,
//     "dog":true,
//     "cat":true,
//     "rabbit":false,
//     "bird":false,
//     "reptile":false,
//     "daily_care":false,
//     "boarding_hotel":false,
//     "pet_sitter":true,
//     "dog_walker":true,
//     "vet": false,
//     "grooming":false,
//     "trainer":true,
//   "icon": "https://i.ibb.co/ydpcK3n/walker-icon1.png",
//     "picture": "https://i.ibb.co/B45kzcr/walker1.jpg",

//     },{
//  "serviceName":"Sina",
//     "serviceEmail":"vfp@gmail.com",
//   "servicePassword": "123"
//         "sp_id":6,
//     "name": "Stay N Play",
//     "address":"130 Hornchurch Road",
//     "city": "Hornchurch",
//     "post_code": "RM11 1DP",
//     "phone":"7473838",
//     "latitude":51.565114,
//     "longitude":0.204909,
//     "dog":true,
//     "cat":true,
//     "rabbit":true,
//     "bird":true,
//     "reptile":true,
//     "daily_care":true,
//     "boarding_hotel":false,
//     "pet_sitter":true,
//     "dog_walker":false,
//     "vet":true,
//     "grooming":false,
//     "trainer":true,
//       "icon": "https://i.ibb.co/mShFk98/daycare-icon3.jpg",
//     "picture": "https://i.ibb.co/3TBmz7G/daycare3.webp",
//     }]

