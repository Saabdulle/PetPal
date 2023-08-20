import React, {useState} from 'react'
import './style.css'

const Filters = ({dogs,setDogs,cats, setCats,rabbits, setRabbits,birds, setBirds, reptiles, setReptiles,daycares, setDaycares,hotels, setHotels,petsitters, setPetsitters,dogwalkers, setDogwalkers,groomers, setGroomers,vets, setVets, trainers, setTrainers}) => {
    
    const [servicesClicked, setServicesClicked] = useState(true)
    const [animalsClicked, setAnimalsClicked] = useState(true)

    // function showServicesFilters() {
    //     setServicesClicked(!servicesClicked)
    // }

    // function showAnimalsFilters() {
    //     setAnimalsClicked(!animalsClicked)
    // }
    
    return <div className="filters">
        <div className='services-filters'>
            <h2 className="services-title" >Services </h2>
            
            {
                servicesClicked ? 
                <div className="s-filters">

            
            <label>Daycare
                <input type="checkbox"
                    checked={daycares}
                    onChange={()=> setDaycares(!daycares)}>
                </input>
            </label>
            <label>Boarding hotels
                <input type="checkbox"
                    checked={hotels}
                    onChange={()=> setHotels(!hotels)}>
                </input>
            </label>
            <label>Pet-sitters
                <input type="checkbox"
                    checked={petsitters}
                    onChange={()=> setPetsitters(!petsitters)}>
                </input>
            </label>
            <label>Dog walkers<input type="checkbox"
            checked={dogwalkers}
            onChange={()=> setDogwalkers(!dogwalkers)}></input></label>
            <label>Groomers<input type="checkbox"
            checked={groomers}
            onChange={()=> setGroomers(!groomers)}></input></label>
            <label>Vets<input type="checkbox"
            checked={vets}
            onChange={()=> setVets(!vets)}></input></label>
            <label>Trainers<input type="checkbox"
            checked={trainers}
            onChange={()=> setTrainers(!trainers)}></input></label>
                </div>
                : null
            }
            
        </div>
    
    
    <div className='services-filters'>
        <h2 className="animals-title" >Animals</h2>
        {
            animalsClicked ?
            <div className="s-filters">
                <label>Dogs<input type="checkbox"
                checked={dogs}
                onChange={()=> setDogs(!dogs)}></input></label>
                <label>Cats<input type="checkbox"
                checked={cats}
                onChange={()=> setCats(!cats)}></input></label>
                <label>Birds<input type="checkbox"
                checked={birds}
                onChange={()=> setBirds(!birds)}></input></label>
                <label>Rabbits<input type="checkbox"
                checked={rabbits}
                onChange={()=> setRabbits(!rabbits)}></input></label>
                <label>Reptiles<input type="checkbox"
                checked={reptiles}
                onChange={()=> setReptiles(!reptiles)}></input></label>
            </div>
            : null
        }
        
        
    </div>
    
</div>
}

export default Filters

