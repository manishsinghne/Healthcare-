import React from "react";

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Healthcare Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {service.name}</p>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Price:</strong> ${service.price}</p>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
