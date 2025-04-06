import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants() {
    try {
      const res = await fetch("http://localhost:6001/plants");
      const data = await res.json();
      setPlants(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  async function addNewPlant(newPlant) {
    const res = await fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" }, 
      body: JSON.stringify(newPlant),
    });
    const data = await res.json();
    setPlants((prev) => [...prev, data]);
  }

  async function updatePlantPrice(id, newPrice) {
    await fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/JSON" }, 
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    });
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    );
  }

  async function deletePlant(id) {
    await fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    setPlants((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        addNewPlant={addNewPlant}
        updatePlantPrice={updatePlantPrice}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;
