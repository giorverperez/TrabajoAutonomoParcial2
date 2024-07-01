import axios from 'axios';
import { data } from '../config';

const API_BASE_URL = data.PORT_PYTHON;

// Servicios para la entidad Vehiculo

// obtener un vehiculo por id
export const getVehiculo = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/vehiculos/${id}`);
  return response.data;
};

// obtener todos los vehiculos
export const getVehiculos = async () => {
  const response = await axios.get(`${API_BASE_URL}/vehiculos`);
  return response.data;
};

// crear un vehiculo
export const createVehiculo = async (usuario_id: number, placa: string, marca: string, modelo: string) => {
  const response = await axios.post(`${API_BASE_URL}/vehiculos`, { usuario_id, placa, marca, modelo });
  return response.data;
};

// actualizar un vehiculo
export const updateVehiculo = async (id: number, usuario_id?: number, placa?: string, marca?: string, modelo?: string) => {
  const response = await axios.put(`${API_BASE_URL}/vehiculos/${id}`, { usuario_id, placa, marca, modelo });
  return response.data;
};

// eliminar un vehiculo
export const deleteVehiculo = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/vehiculos/${id}`);
  return response.data;
};

