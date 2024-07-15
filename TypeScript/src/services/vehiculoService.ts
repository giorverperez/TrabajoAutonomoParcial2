import axios from 'axios';
import { data } from '../config';
import https from 'https';

const BASE_URL = data.URL_PYTHON;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false // Ignorar errores de certificado
});

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    httpsAgent
});

export const getVehiculos = async () => {
    try {
        const response = await axiosInstance.get('/api/vehiculos');
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error fetching vehiculos');
    }
};

export const getVehiculoById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/api/vehiculos/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error fetching vehiculo with id ${id}`);
    }
};

export const createVehiculo = async (vehiculoData: any) => {
    try {
        const response = await axiosInstance.post('/api/vehiculos/', vehiculoData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error creating vehiculo');
    }
};

export const updateVehiculo = async (id: string, vehiculoData: any) => {
    try {
        const response = await axiosInstance.put(`/api/vehiculos/${id}`, vehiculoData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error updating vehiculo with id ${id}`);
    }
};

export const deleteVehiculo = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/api/vehiculos/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error deleting vehiculo with id ${id}`);
    }
};

const handleAxiosError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
        console.error(`${defaultMessage}:`, error.response ? error.response.data : error.message);
        throw new Error(error.response ? error.response.data : defaultMessage);
    } else {
        console.error('Unexpected error:', error);
        throw new Error('Unexpected error occurred');
    }
};