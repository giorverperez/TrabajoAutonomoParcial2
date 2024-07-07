// vehiculoResolvers.ts

import { createVehiculo, getVehiculoById, getVehiculos, updateVehiculo, deleteVehiculo } from '../services/vehiculoService';

export const vehiculoResolvers = {
  Query: {
    vehiculos: async () => {
      return await getVehiculos();
    },
    vehiculo: async (_: any, { id }: any) => {
      return await getVehiculoById(id);
    },
  },
  Mutation: {
    createVehiculo: async (_: any, { input }: any) => {
      const createdVehiculo = await createVehiculo(input);
      return createdVehiculo; // Asegúrate de que los campos devueltos coincidan con el tipo Vehiculo en el esquema
    },
    updateVehiculo: async (_: any, { id, input }: any) => {
      const updatedVehiculo = await updateVehiculo(id, input);
      return updatedVehiculo; // Asegúrate de que los campos devueltos coincidan con el tipo Vehiculo en el esquema
    },
    deleteVehiculo: async (_: any, { id }: any) => {
      const result = await deleteVehiculo(id);
      return result; // Asegúrate de que el tipo de retorno coincida con Boolean en el esquema
    },
  },
};
