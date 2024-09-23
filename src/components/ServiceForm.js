import React, { useState, useEffect } from "react";

const ServiceForm = ({ onAdd, onUpdate, editingIndex, services }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingIndex !== null) {
      const serviceToEdit = services[editingIndex];
      setName(serviceToEdit.name);
      setDescription(serviceToEdit.description);
      setPrice(serviceToEdit.price);
    }
  }, [editingIndex, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      onUpdate({ name, description, price });
    } else {
      onAdd({ name, description, price });
    }
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Service Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <button type="submit">{editingIndex !== null ? "Update Service" : "Add Service"}</button>
    </form>
  );
};

export default ServiceForm;
