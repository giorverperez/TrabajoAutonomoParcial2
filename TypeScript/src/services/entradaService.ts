import axios from 'axios';
import { data } from '../config';
import https from 'https';

const BASE_URL = data.URL_PHP;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false // Ignorar errores de certificado
});

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    httpsAgent
});

export const getEntradas = async () => {
    try {
        const response = await axiosInstance.get('/api/entradas');
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error fetching entradas');
    }
};

export const getEntradaById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/api/entradas/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error fetching entrada with id ${id}`);
    }
};

export const createEntrada = async (entradaData: any) => {
    try {
        const response = await axiosInstance.post('/api/entradas/', entradaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error creating entrada');
    }
};

export const updateEntrada = async (id: string, entradaData: any) => {
    try {
        const response = await axiosInstance.put(`/api/entradas//${id}`, entradaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error updating entrada with id ${id}`);
    }
};

export const deleteEntrada = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/api/entradas//${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error deleting entrada with id ${id}`);
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