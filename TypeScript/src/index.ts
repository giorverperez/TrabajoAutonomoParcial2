import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { usuarioResolvers } from './resolvers/usuarioResolvers';
import { vehiculoResolvers } from './resolvers/vehiculoResolvers';
import { espacioResolvers } from './resolvers/espacioResolvers';
import {entradaResolvers} from './resolvers/entradaResolver'
import {salidaResolvers} from './resolvers/salidaResolver'
import {reservaResolvers} from './resolvers/reservaResolver'




const resolvers = {
  Query: {
    ...usuarioResolvers .Query,
    ...vehiculoResolvers.Query,
    ...espacioResolvers.Query,
    ...entradaResolvers.Query,
    ...salidaResolvers.Query,
    ...reservaResolvers.Query,

  },
  Mutation: {
    ...usuarioResolvers.Mutation,
    ...vehiculoResolvers.Mutation,
    ...espacioResolvers.Mutation,
    ...entradaResolvers.Mutation,
    ...salidaResolvers.Mutation,
    ...reservaResolvers.Mutation,
    
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
