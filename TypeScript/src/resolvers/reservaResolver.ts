import { getReservas, getReservaById, createReserva, updateReserva, deleteReserva } from '../services/reservaService';

export const reservaResolvers = {
    Query: {
        reservas: async () => {
            try {
                return await getReservas();
            } catch (error) {
                console.error('Error fetching reservas:', error);
                throw new Error('Error fetching reservas');
            }
        },
        reserva: async (_: any, { id }: any) => {
            try {
                return await getReservaById(id);
            } catch (error) {
                console.error(`Error fetching reserva with id ${id}:`, error);
                throw new Error(`Error fetching reserva with id ${id}`);
            }
        }
    },
    Mutation: {
        createReserva: async (_: any, { input }: any) => {
            try {
                const createdReserva = await createReserva(input);
                return {
                    id: createdReserva.id,
                    vehiculo: createdReserva.vehiculo,
                    usuario: createdReserva.usuario,
                    fechaInicio: createdReserva.fechaInicio,
                    fechaFin: createdReserva.fechaFin,
                    fechaReserva: createdReserva.fechaReserva // Añadir el campo fechaReserva
                };
            } catch (error) {
                console.error('Error creating reserva:', error);
                throw new Error('Error creating reserva');
            }
        },
        updateReserva: async (_: any, { id, input }: any) => {
            try {
                const updatedReserva = await updateReserva(id, input);
                return {
                    id: updatedReserva.id,
                    vehiculo: updatedReserva.vehiculo,
                    usuario: updatedReserva.usuario,
                    
                    fechaReserva: updatedReserva.fechaReserva // Añadir el campo fechaReserva
                };
            } catch (error) {
                console.error(`Error updating reserva with id ${id}:`, error);
                throw new Error(`Error updating reserva with id ${id}`);
            }
        },
        deleteReserva: async (_: any, { id }: any) => {
            try {
                const deletedReserva = await deleteReserva(id);
                return !!deletedReserva;
            } catch (error) {
                console.error(`Error deleting reserva with id ${id}:`, error);
                throw new Error(`Error deleting reserva with id ${id}`);
            }
        }
    }
};
