import { gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GET_RESERVAS = gql`
  query GetReservas {
    reservas {
      id
      fecha
      vehiculo {
        id
        placa
        modelo
        color
      }
      entrada
      salida
    }
  }
`;

const Reservas = () => {
  const { loading, error, data } = useQuery(GET_RESERVAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Reservas</h1>
      <ul className="list-group">
        {data.reservas.map(reserva => (
          <li key={reserva.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>Reserva ID: {reserva.id}</h5>
              <p>Fecha: {reserva.fecha}</p>
              <p>Vehículo: {reserva.vehiculo.placa} - {reserva.vehiculo.modelo} - {reserva.vehiculo.color}</p>
              <p>Entrada: {reserva.entrada ? reserva.entrada : 'Aún no entra'}</p>
              <p>Salida: {reserva.salida ? reserva.salida : 'Aún no sale'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;