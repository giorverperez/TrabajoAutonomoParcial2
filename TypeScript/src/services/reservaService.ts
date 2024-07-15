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

export const getReservas = async () => {
    try {
        const response = await axiosInstance.get('/api/reserva'); // Asegúrate de que la URL es correcta
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error fetching reservas');
    }
};

export const getReservaById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/api/reserva/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error fetching reserva with id ${id}`);
    }
};

export const createReserva = async (reservaData: any) => {
    try {
        const response = await axiosInstance.post('/api/reserva', reservaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Error creating reserva');
    }
};

export const updateReserva = async (id: string, reservaData: any) => {
    try {
        const response = await axiosInstance.put(`/api/reserva/${id}`, reservaData);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error updating reserva with id ${id}`);
    }
};

export const deleteReserva = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/api/reserva/${id}`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, `Error deleting reserva with id ${id}`);
    }
};

const handleAxiosError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
        console.error(`${defaultMessage}:`, error.response ? error.response.data : error.message);
        throw new Error(error.response ? JSON.stringify(error.response.data) : defaultMessage);
    } else {
        console.error('Unexpected error:', error);
        throw new Error('Unexpected error occurred');
    }
};
