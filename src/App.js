import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import './App.css'; // Optional for custom styles

function App() {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Add new service
  const handleAdd = (service) => {
    setServices([...services, service]);
  };

  // Update an existing service
  const handleUpdate = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === editingIndex ? updatedService : service
    );
    setServices(updatedServices);
    setEditingIndex(null); // Reset editing
  };

  // Edit a service
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  // Delete a service
  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Healthcare Services Management</h1>
      <ServiceForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingIndex={editingIndex}
        services={services}
      />
      <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
