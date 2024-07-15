import { getVehiculos, getVehiculoById, createVehiculo, updateVehiculo, deleteVehiculo } from '../services/vehiculoService';

export const vehiculoResolvers = {
    Query: {
        vehiculos: async () => {
            try {
                return await getVehiculos();
            } catch (error) {
                console.error('Error fetching vehiculos:', error);
                throw new Error('Error fetching vehiculos');
            }
        },
        vehiculo: async (_: any, { id }: any) => {
            try {
                return await getVehiculoById(id);
            } catch (error) {
                console.error(`Error fetching vehiculo with id ${id}:`, error);
                throw new Error(`Error fetching vehiculo with id ${id}`);
            }
        }
    },
    Mutation: {
        createVehiculo: async (_: any, { input }: any) => {
            try {
                const createdVehiculo = await createVehiculo(input);
                return {
                    id: createdVehiculo.id,
                    placa: createdVehiculo.placa,
                    modelo: createdVehiculo.modelo,
                    color: createdVehiculo.color,
                    usuario: createdVehiculo.usuario // Añadir el campo usuario
                };
            } catch (error) {
                console.error('Error creating vehiculo:', error);
                throw new Error('Error creating vehiculo');
            }
        },
        updateVehiculo: async (_: any, { id, input }: any) => {
            try {
                const updatedVehiculo = await updateVehiculo(id, input);
                return {
                    id: updatedVehiculo.id,
                    placa: updatedVehiculo.placa,
                    modelo: updatedVehiculo.modelo,
                    color: updatedVehiculo.color,
                    usuario: updatedVehiculo.usuario // Añadir el campo usuario
                };
            } catch (error) {
                console.error(`Error updating vehiculo with id ${id}:`, error);
                throw new Error(`Error updating vehiculo with id ${id}`);
            }
        },
        deleteVehiculo: async (_: any, { id }: any) => {
            try {
                const deletedVehiculo = await deleteVehiculo(id);
                return !!deletedVehiculo;
            } catch (error) {
                console.error(`Error deleting vehiculo with id ${id}:`, error);
                throw new Error(`Error deleting vehiculo with id ${id}`);
            }
        }
    }
};