import { getEspacios, getEspacioById, createEspacio, updateEspacio, deleteEspacio } from '../services/espacioService';

export const espacioResolvers = {
    Query: {
        espacios: async () => {
            try {
                return await getEspacios();
            } catch (error) {
                console.error('Error fetching espacios:', error);
                throw new Error('Error fetching espacios');
            }
        },
        espacio: async (_: any, { id }: any) => {
            try {
                return await getEspacioById(id);
            } catch (error) {
                console.error(`Error fetching espacio with id ${id}:`, error);
                throw new Error(`Error fetching espacio with id ${id}`);
            }
        }
    },
    Mutation: {
        createEspacio: async (_: any, { input }: any) => {
            try {
                const createdEspacio = await createEspacio(input);
                return {
                    id: createdEspacio.id,
                    numero_parquedero: createdEspacio.numero_parquedero,
                    disponible: createdEspacio.disponible
                };
            } catch (error) {
                console.error('Error creating espacio:', error);
                throw new Error('Error creating espacio');
            }
        },
        updateEspacio: async (_: any, { id, input }: any) => {
            try {
                const updatedEspacio = await updateEspacio(id, input);
                return {
                    id: updatedEspacio.id,
                    numero_parquedero: updatedEspacio.numero_parquedero,
                    disponible: updatedEspacio.disponible
                };
            } catch (error) {
                console.error(`Error updating espacio with id ${id}:`, error);
                throw new Error(`Error updating espacio with id ${id}`);
            }
        },
        deleteEspacio: async (_: any, { id }: any) => {
            try {
                const deletedEspacio = await deleteEspacio(id);
                return !!deletedEspacio;
            } catch (error) {
                console.error(`Error deleting espacio with id ${id}:`, error);
                throw new Error(`Error deleting espacio with id ${id}`);
            }
        }
    }
};