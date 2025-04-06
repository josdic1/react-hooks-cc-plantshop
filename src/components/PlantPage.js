import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant, updatePlantPrice, deletePlant }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search onSearch={setSearch} />
      <PlantList
        plants={filteredPlants}
        onUpdatePrice={updatePlantPrice}
        onDelete={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
