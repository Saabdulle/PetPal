// import { CardProfile } from "../../Components";
// import { PetProfileForm } from "../../Components/PetProfileForm";
import React, { useEffect, useState } from 'react';
import { MessageIcon } from '../../Components';
import { useAuth } from '../../context';
import './style.css'

const PetProfile = () => {
  const [commentClicked, setCommentClicked] = useState(false)
  const [pets, setPets] = useState([]);
  const {user_id} = useAuth()

  function clickComment() {
    setCommentClicked(!commentClicked)
  }

  function newPet() {
    window.location.href = "/pet-profile";
  }

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch(`http://localhost:5000/users/${user_id}/pets`);
        if (!response.ok) {
          throw new Error(`Failed to get user pets: ${response.statusText}`);
        }
        const petsData = await response.json();
        setPets(petsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPets();
  }, [user_id]);

  return (
    <>
    <div className='pet-profile-page'>
      <h1>My Pets</h1>
      <em>Here you can see all the pets you've added to your profile and add more</em>
      {/* <img src="../../../rooftop.png" alt="rooftop" className='roof'/> */}
      <div className='pets-holder'>
        {pets.map((pet) => (
            <div key={pet.id} className='pet'>
              <h3>{pet.name}</h3>
              <p>Breed: {pet.animal_type}</p>
              <p>Age: {pet.animal_age}</p>
              <img src="../../../Subject.png" alt="dog" />
              <button onClick={clickComment}>Special notes</button>
              <p className={commentClicked ? "appear" : "disappear"}>{pet.comment}</p>
              
            </div>
          ))}
          <button className='add-pet' onClick={newPet}>+</button>
      </div>
    </div>
    <MessageIcon/>
    </>
  );
}
export default PetProfile;
