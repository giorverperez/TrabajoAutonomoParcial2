// index.ts

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { usuarioResolvers } from './resolvers/usuarioResolvers';
import { vehiculoResolvers } from './resolvers/vehiculoResolvers';
import { espacioResolvers } from './resolvers/espacioResolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers: [usuarioResolvers, vehiculoResolvers, espacioResolvers], // Agrega aquí otros resolvers si los tienes
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
