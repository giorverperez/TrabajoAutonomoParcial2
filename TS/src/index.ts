import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import axios from 'axios';

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Usuario {
    id: Int
    nombre: String
    email: String
  }

  type Query {
    getUsuario(id: Int!): Usuario
    getUsuarios: [Usuario]
  }

  type Mutation {
    createUsuario(nombre: String!, email: String!): Usuario
    updateUsuario(id: Int!, nombre: String, email: String): Usuario
    deleteUsuario(id: Int!): Usuario
  }
`);

// Resolver los Endpoints REST en GraphQL
const root = {
  getUsuario: async ({ id }: { id: number }) => {
    const response = await axios.get(`http://localhost:5000/api/Usuarios/${id}`);
    return response.data;
  },
  getUsuarios: async () => {
    const response = await axios.get('http://localhost:5000/api/Usuarios');
    return response.data;
  },
  createUsuario: async ({ nombre, email }: { nombre: string, email: string }) => {
    const response = await axios.post('http://localhost:5000/api/Usuarios', { nombre, email });
    return response.data;
  },
  updateUsuario: async ({ id, nombre, email }: { id: number, nombre?: string, email?: string }) => {
    const response = await axios.put(`http://localhost:5000/api/Usuarios/${id}`, { nombre, email });
    return response.data;
  },
  deleteUsuario: async ({ id }: { id: number }) => {
    const response = await axios.delete(`http://localhost:5000/api/Usuarios/${id}`);
    return response.data;
  },
};

// Crear el servidor Express
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL ejecutándose en http://localhost:${PORT}/graphql`);
});
