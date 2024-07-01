import axios from 'axios';
import { data } from '../config';

const API_BASE_URL = data.PORT_PYTHON;

// Servicios para la entidad Usuario

// obtener un usuario por id
export const getUsuario = async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/usuarios/${id}`);
    return response.data;
  };
  
  // obtener todos los usuarios
  export const getUsuarios = async () => {
    const response = await axios.get(`${API_BASE_URL}/usuarios`);
    return response.data;
  };
  
  // crear un usuario
  export const createUsuario = async (nombre: string, apellido: string, cedula: string, correo_electronico: string, direccion: string) => {
    const response = await axios.post(`${API_BASE_URL}/usuarios`, { nombre, apellido, cedula, correo_electronico, direccion });
    return response.data;
  };
  
  // actualizar un usuario
  export const updateUsuario = async (id: number, nombre?: string, apellido?: string, cedula?: string, correo_electronico?: string, direccion?: string) => {
    const response = await axios.put(`${API_BASE_URL}/usuarios/${id}`, { nombre, apellido, cedula, correo_electronico, direccion });
    return response.data;
  };
  
  // eliminar un usuario
  export const deleteUsuario = async (id: number) => {
    const response = await axios.delete(`${API_BASE_URL}/usuarios/${id}`);
    return response.data;
  };
  