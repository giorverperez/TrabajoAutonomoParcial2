// resolvers/usuarioResolvers.ts

import { createUsuario, deleteUsuario, getUsuarioById, getUsuarios, updateUsuario } from '../services/usuarioService';

export const usuarioResolvers = {
  Query: {
    usuarios: async () => {
      return await getUsuarios();
    },
    usuario: async (_: any, { id }: any) => {
      return await getUsuarioById(id);
    },
  },
  Mutation: {
    createUsuario: async (_: any, { input }: any) => {
      const createdUsuario = await createUsuario(input);
      return createdUsuario; // Asegúrate de que los campos devueltos coincidan con el tipo Usuario en el esquema
    },
    updateUsuario: async (_: any, { id, input }: any) => {
      const updatedUsuario = await updateUsuario(id, input);
      return updatedUsuario; // Asegúrate de que los campos devueltos coincidan con el tipo Usuario en el esquema
    },
    deleteUsuario: async (_: any, { id }: any) => {
      const result = await deleteUsuario(id);
      return result; // Asegúrate de que el tipo de retorno coincida con Boolean en el esquema
    },
  },
};
