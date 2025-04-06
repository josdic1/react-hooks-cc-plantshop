import { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNewPlant(formData);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Plant name"
          onChange={onFormChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={onFormChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          placeholder="Price"
          onChange={onFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
