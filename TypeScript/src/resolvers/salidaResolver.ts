import { getSalidas, getSalidaById, createSalida, updateSalida, deleteSalida } from '../services/salidaService';

export const salidaResolvers = {
    Query: {
        salidas: async () => {
            try {
                return await getSalidas();
            } catch (error) {
                console.error('Error fetching salidas:', error);
                throw new Error('Error fetching salidas');
            }
        },
        salida: async (_: any, { id }: any) => {
            try {
                return await getSalidaById(id);
            } catch (error) {
                console.error(`Error fetching salida with id ${id}:`, error);
                throw new Error(`Error fetching salida with id ${id}`);
            }
        }
    },
    Mutation: {
        createSalida: async (_: any, { input }: any) => {
            try {
                const createdSalida = await createSalida(input);
                return {
                    id: createdSalida.id,
                    vehiculo_id: createdSalida.vehiculo_id,
                    fecha_salida: createdSalida.fecha_salida,
                    other_fields: createdSalida.other_fields,
                    vehiculo: createdSalida.vehiculo
                };
            } catch (error) {
                console.error('Error creating salida:', error);
                throw new Error('Error creating salida');
            }
        },
        updateSalida: async (_: any, { id, input }: any) => {
            try {
                const updatedSalida = await updateSalida(id, input);
                return {
                    id: updatedSalida.id,
                    vehiculo_id: updatedSalida.vehiculo_id,
                    fecha_salida: updatedSalida.fecha_salida,
                    other_fields: updatedSalida.other_fields,
                    vehiculo: updatedSalida.vehiculo
                };
            } catch (error) {
                console.error(`Error updating salida with id ${id}:`, error);
                throw new Error(`Error updating salida with id ${id}`);
            }
        },
        deleteSalida: async (_: any, { id }: any) => {
            try {
                const deletedSalida = await deleteSalida(id);
                return !!deletedSalida;
            } catch (error) {
                console.error(`Error deleting salida with id ${id}:`, error);
                throw new Error(`Error deleting salida with id ${id}`);
            }
        }
    }
};