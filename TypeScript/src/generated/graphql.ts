import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ActualizarEspacioInput = {
  disponible?: InputMaybe<Scalars['Boolean']['input']>;
  numero_parqueadero?: InputMaybe<Scalars['Int']['input']>;
};

export type CrearEspacioInput = {
  disponible: Scalars['Boolean']['input'];
  numero_parqueadero: Scalars['Int']['input'];
};

export type Espacio = {
  __typename?: 'Espacio';
  disponible: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  numero_parqueadero: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  actualizarEspacio: Espacio;
  actualizarUsuario: Usuario;
  crearEspacio: Espacio;
  crearUsuario: Usuario;
  createVehiculo: Vehiculo;
  deleteVehiculo: Scalars['Boolean']['output'];
  eliminarEspacio: Scalars['Boolean']['output'];
  eliminarUsuario: Scalars['Boolean']['output'];
  updateVehiculo: Vehiculo;
};


export type MutationActualizarEspacioArgs = {
  id: Scalars['ID']['input'];
  input: ActualizarEspacioInput;
};


export type MutationActualizarUsuarioArgs = {
  id: Scalars['ID']['input'];
  input: UsuarioInput;
};


export type MutationCrearEspacioArgs = {
  input: CrearEspacioInput;
};


export type MutationCrearUsuarioArgs = {
  input: UsuarioInput;
};


export type MutationCreateVehiculoArgs = {
  input: VehiculoInput;
};


export type MutationDeleteVehiculoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEliminarEspacioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEliminarUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateVehiculoArgs = {
  id: Scalars['ID']['input'];
  input: VehiculoInput;
};

export type Query = {
  __typename?: 'Query';
  espacio?: Maybe<Espacio>;
  espacios: Array<Espacio>;
  usuario?: Maybe<Usuario>;
  usuarios: Array<Usuario>;
  vehiculo?: Maybe<Vehiculo>;
  vehiculos: Array<Vehiculo>;
};


export type QueryEspacioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehiculoArgs = {
  id: Scalars['ID']['input'];
};

export type Usuario = {
  __typename?: 'Usuario';
  contrasena: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nombre: Scalars['String']['output'];
};

export type UsuarioInput = {
  contrasena: Scalars['String']['input'];
  email: Scalars['String']['input'];
  nombre: Scalars['String']['input'];
};

export type Vehiculo = {
  __typename?: 'Vehiculo';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  marca: Scalars['String']['output'];
  modelo: Scalars['String']['output'];
  placa: Scalars['String']['output'];
};

export type VehiculoInput = {
  color: Scalars['String']['input'];
  marca: Scalars['String']['input'];
  modelo: Scalars['String']['input'];
  placa: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActualizarEspacioInput: ActualizarEspacioInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CrearEspacioInput: CrearEspacioInput;
  Espacio: ResolverTypeWrapper<Espacio>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Usuario: ResolverTypeWrapper<Usuario>;
  UsuarioInput: UsuarioInput;
  Vehiculo: ResolverTypeWrapper<Vehiculo>;
  VehiculoInput: VehiculoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActualizarEspacioInput: ActualizarEspacioInput;
  Boolean: Scalars['Boolean']['output'];
  CrearEspacioInput: CrearEspacioInput;
  Espacio: Espacio;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Usuario: Usuario;
  UsuarioInput: UsuarioInput;
  Vehiculo: Vehiculo;
  VehiculoInput: VehiculoInput;
};

export type EspacioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Espacio'] = ResolversParentTypes['Espacio']> = {
  disponible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numero_parqueadero?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  actualizarEspacio?: Resolver<ResolversTypes['Espacio'], ParentType, ContextType, RequireFields<MutationActualizarEspacioArgs, 'id' | 'input'>>;
  actualizarUsuario?: Resolver<ResolversTypes['Usuario'], ParentType, ContextType, RequireFields<MutationActualizarUsuarioArgs, 'id' | 'input'>>;
  crearEspacio?: Resolver<ResolversTypes['Espacio'], ParentType, ContextType, RequireFields<MutationCrearEspacioArgs, 'input'>>;
  crearUsuario?: Resolver<ResolversTypes['Usuario'], ParentType, ContextType, RequireFields<MutationCrearUsuarioArgs, 'input'>>;
  createVehiculo?: Resolver<ResolversTypes['Vehiculo'], ParentType, ContextType, RequireFields<MutationCreateVehiculoArgs, 'input'>>;
  deleteVehiculo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVehiculoArgs, 'id'>>;
  eliminarEspacio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationEliminarEspacioArgs, 'id'>>;
  eliminarUsuario?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationEliminarUsuarioArgs, 'id'>>;
  updateVehiculo?: Resolver<ResolversTypes['Vehiculo'], ParentType, ContextType, RequireFields<MutationUpdateVehiculoArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  espacio?: Resolver<Maybe<ResolversTypes['Espacio']>, ParentType, ContextType, RequireFields<QueryEspacioArgs, 'id'>>;
  espacios?: Resolver<Array<ResolversTypes['Espacio']>, ParentType, ContextType>;
  usuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<QueryUsuarioArgs, 'id'>>;
  usuarios?: Resolver<Array<ResolversTypes['Usuario']>, ParentType, ContextType>;
  vehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType, RequireFields<QueryVehiculoArgs, 'id'>>;
  vehiculos?: Resolver<Array<ResolversTypes['Vehiculo']>, ParentType, ContextType>;
};

export type UsuarioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Usuario'] = ResolversParentTypes['Usuario']> = {
  contrasena?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehiculoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehiculo'] = ResolversParentTypes['Vehiculo']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marca?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modelo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Espacio?: EspacioResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Usuario?: UsuarioResolvers<ContextType>;
  Vehiculo?: VehiculoResolvers<ContextType>;
};

