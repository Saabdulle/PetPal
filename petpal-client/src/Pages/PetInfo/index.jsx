import React from 'react'
import {TipCard} from '../../Components'
import './style.css'

function PetInfo() {
  return (
    <div>
        <h2 className="tips-heading">Tips for Pets</h2>
        <div className="tips-filters">
            <ul className="tips-list">
                <button>
                   dogs 
                </button>
                <button>
                   cats 
                </button>
                <button>
                   birds 
                </button>
                <button>
                   fish 
                </button>
                <button>
                   reptiles 
                </button>
                <button>
                   hamsters 
                </button>
                <button>
                   guinea pigs 
                </button>
            </ul>
        </div>
        <TipCard />
        
    </div>
  )
}

export default PetInfo