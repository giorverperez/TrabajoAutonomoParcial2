// service/usuarioService.ts

import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON; // Asegúrate de que esta URL sea la correcta

export const getUsuarios = async () => {
  const response = await axios.get(`${BASE_URL}/api/usuarios`);
  return response.data;
};

export const getUsuarioById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/api/usuarios/${id}`);
  return response.data;
};

export const createUsuario = async (usuarioData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/usuarios/`, usuarioData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating usuario:', error.response ? error.response.data : error.message);
      throw new Error('Error creating usuario');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred');
    }
  }
};

export const updateUsuario = async (id: string, usuarioData: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/usuarios/${id}`, usuarioData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error updating usuario:', error.response ? error.response.data : error.message);
      throw new Error('Error updating usuario');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred');
    }
  }
};

export const deleteUsuario = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error deleting usuario:', error.response ? error.response.data : error.message);
      throw new Error('Error deleting usuario');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred');
    }
  }
};
