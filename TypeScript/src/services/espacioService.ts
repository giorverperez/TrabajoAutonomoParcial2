// services/espacioService.ts

import axios from 'axios';
import { data } from '../config';
import * as https from 'https'; // Importa el módulo https de Node.js

const BASE_URL = data.URL_C;

// Configura el agente HTTPS para aceptar certificados auto-firmados
const httpsAgent = new https.Agent({  
  rejectUnauthorized: false // Ajusta esta configuración según tu entorno de desarrollo
});

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  httpsAgent: httpsAgent
});

export const getEspacios = async () => {
  try {
    const response = await axiosInstance.get('/api/Espacios');
    return response.data;
  } catch (error) {
    console.error('Error fetching espacios:', error);
    throw new Error('Failed to fetch espacios');
  }
};

export const getEspacioById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/Espacios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching espacio with id ${id}:`, error);
    throw new Error(`Failed to fetch espacio with id ${id}`);
  }
};

export const createEspacio = async (espacioData: any) => {
  try {
    const response = await axiosInstance.post('/api/Espacios', espacioData);
    return response.data;
  } catch (error) {
    console.error('Error creating espacio:', error);
    throw new Error('Failed to create espacio');
  }
};

export const updateEspacio = async (id: string, espacioData: any) => {
  try {
    const response = await axiosInstance.put(`/api/Espacios/${id}`, espacioData);
    return response.data;
  } catch (error) {
    console.error(`Error updating espacio with id ${id}:`, error);
    throw new Error(`Failed to update espacio with id ${id}`);
  }
};

export const deleteEspacio = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/Espacios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting espacio with id ${id}:`, error);
    throw new Error(`Failed to delete espacio with id ${id}`);
  }
};
