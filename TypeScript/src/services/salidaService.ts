import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_C; // Cambia esto según corresponda

export const getSalidas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/salidas`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error fetching salidas');
    }
};

export const getSalidaById = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/salidas/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error fetching salida with id ${id}`);
    }
};

export const createSalida = async (salidaData: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/salidas`, salidaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error creating salida');
    }
};

export const updateSalida = async (id: string, salidaData: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/salidas/${id}`, salidaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error updating salida with id ${id}`);
    }
};

export const deleteSalida = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/salidas/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error deleting salida with id ${id}`);
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