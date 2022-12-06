import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (type) => {
    setFilters({ type: type });
  };

  const onFindPetsClick = async () => {
    let baseUrl = "http://localhost:3001/pets";
    if (filters.type === "cat") {
      baseUrl += "?type=cat";
    } else if (filters.type === "dog") {
      baseUrl += "?type=dog";
    } else if (filters.type === "micropig") {
      baseUrl += "?type=micropig";
    }
    const result = await fetch(baseUrl);
    const json = await result.json();
    setPets(json);
    // console.log(json);
    // console.log(baseUrl);
  };

  const onAdoptPet = (id) => {
    // find the pet with the id parameter in the pets state
    const updatedPets = pets.map((pet) => {
      if (pet.id === id) {
        // set the isAdopt to true
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });
    setPets(updatedPets);
  };

  // useEffect(() => {
  //   onFindPetsClick();
  // }, []);

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
