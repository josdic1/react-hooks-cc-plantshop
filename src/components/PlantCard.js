import { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDelete }) {
  const [isInStock, setIsInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);
  const [editing, setEditing] = useState(false);

  function toggleStock() {
    setIsInStock((prev) => !prev);
  }

  function handlePriceSave() {
    onUpdatePrice(plant.id, price);
    setEditing(false);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>

      {editing ? (
        <>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handlePriceSave}>Save</button>
        </>
      ) : (
        <>
          <p>Price: {price}</p> 
          <button onClick={() => setEditing(true)}>Edit Price</button>
        </>
      )}

      <button onClick={() => onDelete(plant.id)}>Delete</button>

      {isInStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
