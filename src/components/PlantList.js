import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePrice, onDelete }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePrice={onUpdatePrice}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default PlantList;
