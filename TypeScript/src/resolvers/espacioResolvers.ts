// resolvers/espacioResolvers.ts

import { getEspacios, getEspacioById, createEspacio, updateEspacio, deleteEspacio } from '../services/espacioService';

export const espacioResolvers = {
  Query: {
    espacios: async () => {
      return await getEspacios();
    },
    espacio: async (_: any, { id }: any) => {
      return await getEspacioById(id);
    },
  },
  Mutation: {
    crearEspacio: async (_: any, { input }: any) => {
      const createdEspacio = await createEspacio(input);
      return createdEspacio;
    },
    actualizarEspacio: async (_: any, { id, input }: any) => {
      const updatedEspacio = await updateEspacio(id, input);
      return updatedEspacio;
    },
    eliminarEspacio: async (_: any, { id }: any) => {
      const result = await deleteEspacio(id);
      return result;
    },
  },
};
