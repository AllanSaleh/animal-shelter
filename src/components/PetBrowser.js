import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      {pets && pets.map((pet) => <Pet pet={pet} onAdoptPet={onAdoptPet} />)}
    </div>
  );
}

export default PetBrowser;
