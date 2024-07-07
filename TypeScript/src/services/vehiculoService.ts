// services/vehiculoService.ts
import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON;

export const getVehiculos = async () => {
    const response = await axios.get(`${BASE_URL}/api/vehiculos`);
    return response.data;
};

export const getVehiculoById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/api/vehiculos/${id}`);
    return response.data;
};

export const createVehiculo = async (vehiculoData: any) => {
    try {
        // Convertir los nombres de campos según lo esperado por el backend de Django
        const transformedData = {
            placa: vehiculoData.placa,
            // Añadir más campos según necesites
        };
        const response = await axios.post(`${BASE_URL}/api/vehiculos/`, transformedData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error creating vehiculo:', error.response ? error.response.data : error.message);
            throw new Error('Error creating vehiculo');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred');
        }
    }
};

export const updateVehiculo = async (id: string, vehiculoData: any) => {
    try {
        // Convertir los nombres de campos según lo esperado por el backend de Django
        const transformedData = {
            placa: vehiculoData.placa,
            // Añadir más campos según necesites
        };
        const response = await axios.put(`${BASE_URL}/api/vehiculos/${id}`, transformedData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updating vehiculo:', error.response ? error.response.data : error.message);
            throw new Error('Error updating vehiculo');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred');
        }
    }
};

export const deleteVehiculo = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/vehiculos/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error deleting vehiculo:', error.response ? error.response.data : error.message);
            throw new Error('Error deleting vehiculo');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred');
        }
    }
};
