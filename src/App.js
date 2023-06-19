import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ClienteForm from './Components/ClienteForm';
import VehiculoForm from './Components/VehiculoForm';
import ServiciosForm from './Components/ServiciosForm';


function App() {
  const [step, setStep] = useState(1);
  const [clienteData, setClienteData] = useState(null);
  const [vehiculoData, setVehiculoData] = useState(null);
  const [servicios, setServicios] = useState({})
  const [fechaEntrega, setFechaEntrega] = useState('');

  const handleClienteFormSubmit = (data) => {
    setClienteData(data);
    setStep(2);
  };

  const handleVehiculoFormSubmit = (data) => {
    setVehiculoData(data);
    setStep(3);
  };

  const handleServiciosSubmit = (data) => {
    setServicios(data);
    setStep(4);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Orden de trabajo generada:', {
      cliente: clienteData,
      vehiculo: vehiculoData,
      servicios,
      fechaEntrega,
    });
    setStep(5);
  };

  const selectedServicios = Object.entries(servicios)
  .filter(([_, value]) => value)
  .map(([key, _]) => key);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <ClienteForm datos={handleClienteFormSubmit} />;
      case 2:
        return <VehiculoForm onSubmit={handleVehiculoFormSubmit} />;
      case 3:
        return <ServiciosForm onSubmit={handleServiciosSubmit} />;
      case 4:
        return (
          <>
            <div>
              <h2>Revisar Datos:</h2>
              <h3>Cliente:</h3>
              {Object.keys(clienteData).map((key) => (
                <p key={key}>
                  {key}: {clienteData[key]}
                </p>
              ))}
              <h3>Vehículo:</h3>
              {Object.keys(vehiculoData).map((key) => (
                <p key={key}>
                  {key}: {vehiculoData[key]}
                </p>
              ))}
              <h3>Servicios:</h3>
              <div>
                {selectedServicios.length > 0 ? (
                  <ul>
                    {selectedServicios.map((servicio) => (
                      <li key={servicio}>{servicio}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No se ha seleccionado ningún servicio.</p>
                )}
              </div>
            </div>
          <form onSubmit={handleFinalSubmit}>
            <h2>Orden de trabajo</h2>
            <input
              type="text"
              placeholder="Fecha de entrega"
              value={fechaEntrega}
              onChange={(e) => setFechaEntrega(e.target.value)}
              required
            />
            <button type="submit">Generar orden de trabajo</button>
          </form>
          </>
        );
      case 5:
          return (
            <p>Orden generada correctamente!</p>
          );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepContent()}
    </div>
  );
}

export default App;
