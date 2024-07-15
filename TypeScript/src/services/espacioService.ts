import axios from 'axios';
import { data } from '../config';
import https from 'https';

const BASE_URL = data.URL_C;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false // Ignorar errores de certificado
});

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    httpsAgent
});

export const getEspacios = async () => {
    try {
        const response = await axiosInstance.get('/Espacios');
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error fetching espacios');
    }
};

export const getEspacioById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/Espacios/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error fetching espacio with id ${id}`);
    }
};

export const createEspacio = async (espacioData: any) => {
    try {
        const response = await axiosInstance.post('/Espacios', espacioData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error creating espacio');
    }
};

export const updateEspacio = async (id: string, espacioData: any) => {
    try {
        const response = await axiosInstance.put(`/Espacios/${id}`, espacioData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error updating espacio with id ${id}`);
    }
};

export const deleteEspacio = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/Espacios/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error deleting espacio with id ${id}`);
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