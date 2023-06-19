import React, { useState } from 'react';
import './InfoCliente.css'
function ClienteForm({ datos }) {
  const [clienteData, setClienteData] = useState({
    nombre: '',
    email: '',
    contacto: '',
    identificacion: '',
    tipoIdentificacion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClienteData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    datos(clienteData);
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <h2>Datos del cliente</h2>
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        value={clienteData.nombre}
        onChange={handleInputChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={clienteData.email}
        onChange={handleInputChange}
        required
      />
      <label>Teléfono:</label>
      <input
        type="text"
        name="contacto"
        placeholder="Número de contacto"
        value={clienteData.contacto}
        onChange={handleInputChange}
        required
      />
      <label>Identificación:</label>
      <input
        type="text"
        name="identificacion"
        placeholder="Identificación fiscal"
        value={clienteData.identificacion}
        onChange={handleInputChange}
        required
      />
      <select
        name="tipoIdentificacion"
        value={clienteData.tipoIdentificacion}
        onChange={handleInputChange}
        required
      >
        <option value="">Seleccionar tipo de identificación</option>
        <option value="cedula">Cédula</option>
        <option value="ruc">RUC</option>
        <option value="pasaporte">Pasaporte</option>
      </select>
      <button type="submit">Siguiente</button>
    </form>
  );
}

export default ClienteForm;
