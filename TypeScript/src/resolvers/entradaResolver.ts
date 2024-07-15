import { getEntradas, getEntradaById, createEntrada, updateEntrada, deleteEntrada } from '../services/entradaService';

export const entradaResolvers = {
    Query: {
        entradas: async () => {
            try {
                return await getEntradas();
            } catch (error) {
                console.error('Error fetching entradas:', error);
                throw new Error('Error fetching entradas');
            }
        },
        entrada: async (_: any, { id }: any) => {
            try {
                return await getEntradaById(id);
            } catch (error) {
                console.error(`Error fetching entrada with id ${id}:`, error);
                throw new Error(`Error fetching entrada with id ${id}`);
            }
        }
    },
    Mutation: {
        createEntrada: async (_: any, { input }: any) => {
            try {
                const createdEntrada = await createEntrada(input);
                return {
                    id: createdEntrada.id,
                    fecha_entrada: createdEntrada.fecha_entrada,
                    vehiculo_id: createdEntrada.vehiculo_id
                };
            } catch (error) {
                console.error('Error creating entrada:', error);
                throw new Error('Error creating entrada');
            }
        },
        updateEntrada: async (_: any, { id, input }: any) => {
            try {
                const updatedEntrada = await updateEntrada(id, input);
                return {
                    id: updatedEntrada.id,
                    fecha_entrada: updatedEntrada.fecha_entrada,
                    vehiculo_id: updatedEntrada.vehiculo_id
                };
            } catch (error) {
                console.error(`Error updating entrada with id ${id}:`, error);
                throw new Error(`Error updating entrada with id ${id}`);
            }
        },
        deleteEntrada: async (_: any, { id }: any) => {
            try {
                const deletedEntrada = await deleteEntrada(id);
                return !!deletedEntrada;
            } catch (error) {
                console.error(`Error deleting entrada with id ${id}:`, error);
                throw new Error(`Error deleting entrada with id ${id}`);
            }
        }
    }
};