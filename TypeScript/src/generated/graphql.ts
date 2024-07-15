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

export type Entrada = {
  __typename?: 'Entrada';
  fecha_entrada: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  vehiculo?: Maybe<Vehiculo>;
  vehiculo_id: Scalars['ID']['output'];
};

export type EntradaInput = {
  fecha_entrada: Scalars['String']['input'];
  other_fields?: InputMaybe<Scalars['String']['input']>;
  vehiculo_id: Scalars['ID']['input'];
};

export type Espacio = {
  __typename?: 'Espacio';
  disponible: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  numero_parquedero: Scalars['Int']['output'];
};

export type EspacioInput = {
  disponible: Scalars['Boolean']['input'];
  numero_parquedero: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntrada?: Maybe<Entrada>;
  createEspacio?: Maybe<Espacio>;
  createReserva?: Maybe<Reserva>;
  createSalida?: Maybe<Salida>;
  createUsuario?: Maybe<Usuario>;
  createVehiculo?: Maybe<Vehiculo>;
  deleteEntrada?: Maybe<Scalars['Boolean']['output']>;
  deleteEspacio?: Maybe<Scalars['Boolean']['output']>;
  deleteReserva?: Maybe<Scalars['Boolean']['output']>;
  deleteSalida?: Maybe<Scalars['Boolean']['output']>;
  deleteUsuario?: Maybe<Scalars['Boolean']['output']>;
  deleteVehiculo?: Maybe<Scalars['Boolean']['output']>;
  updateEntrada?: Maybe<Entrada>;
  updateEspacio?: Maybe<Espacio>;
  updateReserva?: Maybe<Reserva>;
  updateSalida?: Maybe<Salida>;
  updateUsuario?: Maybe<Usuario>;
  updateVehiculo?: Maybe<Vehiculo>;
};


export type MutationCreateEntradaArgs = {
  input: EntradaInput;
};


export type MutationCreateEspacioArgs = {
  input: EspacioInput;
};


export type MutationCreateReservaArgs = {
  input: ReservaInput;
};


export type MutationCreateSalidaArgs = {
  input: SalidaInput;
};


export type MutationCreateUsuarioArgs = {
  input: UsuarioInput;
};


export type MutationCreateVehiculoArgs = {
  input: VehiculoInput;
};


export type MutationDeleteEntradaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEspacioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSalidaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVehiculoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEntradaArgs = {
  id: Scalars['ID']['input'];
  input: EntradaInput;
};


export type MutationUpdateEspacioArgs = {
  id: Scalars['ID']['input'];
  input: EspacioInput;
};


export type MutationUpdateReservaArgs = {
  id: Scalars['ID']['input'];
  input: ReservaInput;
};


export type MutationUpdateSalidaArgs = {
  id: Scalars['ID']['input'];
  input: SalidaInput;
};


export type MutationUpdateUsuarioArgs = {
  id: Scalars['ID']['input'];
  input: UsuarioInput;
};


export type MutationUpdateVehiculoArgs = {
  id: Scalars['ID']['input'];
  input: VehiculoInput;
};

export type Query = {
  __typename?: 'Query';
  entrada?: Maybe<Entrada>;
  entradas?: Maybe<Array<Maybe<Entrada>>>;
  espacio?: Maybe<Espacio>;
  espacios?: Maybe<Array<Maybe<Espacio>>>;
  reserva?: Maybe<Reserva>;
  reservas?: Maybe<Array<Maybe<Reserva>>>;
  salida?: Maybe<Salida>;
  salidas?: Maybe<Array<Maybe<Salida>>>;
  usuario?: Maybe<Usuario>;
  usuarios?: Maybe<Array<Maybe<Usuario>>>;
  vehiculo?: Maybe<Vehiculo>;
  vehiculos?: Maybe<Array<Maybe<Vehiculo>>>;
};


export type QueryEntradaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEspacioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReservaArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySalidaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehiculoArgs = {
  id: Scalars['ID']['input'];
};

export type Reserva = {
  __typename?: 'Reserva';
  fechaReserva: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  usuario: Usuario;
  vehiculo: Vehiculo;
};

export type ReservaInput = {
  fechaReserva: Scalars['String']['input'];
  usuario: Scalars['ID']['input'];
  vehiculo: Scalars['ID']['input'];
};

export type Salida = {
  __typename?: 'Salida';
  fecha_salida: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  other_fields?: Maybe<Scalars['String']['output']>;
  vehiculo?: Maybe<Vehiculo>;
  vehiculo_id: Scalars['ID']['output'];
};

export type SalidaInput = {
  fecha_salida: Scalars['String']['input'];
  other_fields?: InputMaybe<Scalars['String']['input']>;
  vehiculo_id: Scalars['ID']['input'];
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
  modelo: Scalars['String']['output'];
  placa: Scalars['String']['output'];
  usuario: Usuario;
};

export type VehiculoInput = {
  color: Scalars['String']['input'];
  modelo: Scalars['String']['input'];
  placa: Scalars['String']['input'];
  usuario: Scalars['ID']['input'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Entrada: ResolverTypeWrapper<Entrada>;
  EntradaInput: EntradaInput;
  Espacio: ResolverTypeWrapper<Espacio>;
  EspacioInput: EspacioInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Reserva: ResolverTypeWrapper<Reserva>;
  ReservaInput: ReservaInput;
  Salida: ResolverTypeWrapper<Salida>;
  SalidaInput: SalidaInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Usuario: ResolverTypeWrapper<Usuario>;
  UsuarioInput: UsuarioInput;
  Vehiculo: ResolverTypeWrapper<Vehiculo>;
  VehiculoInput: VehiculoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Entrada: Entrada;
  EntradaInput: EntradaInput;
  Espacio: Espacio;
  EspacioInput: EspacioInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Reserva: Reserva;
  ReservaInput: ReservaInput;
  Salida: Salida;
  SalidaInput: SalidaInput;
  String: Scalars['String']['output'];
  Usuario: Usuario;
  UsuarioInput: UsuarioInput;
  Vehiculo: Vehiculo;
  VehiculoInput: VehiculoInput;
};

export type EntradaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entrada'] = ResolversParentTypes['Entrada']> = {
  fecha_entrada?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType>;
  vehiculo_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EspacioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Espacio'] = ResolversParentTypes['Espacio']> = {
  disponible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numero_parquedero?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEntrada?: Resolver<Maybe<ResolversTypes['Entrada']>, ParentType, ContextType, RequireFields<MutationCreateEntradaArgs, 'input'>>;
  createEspacio?: Resolver<Maybe<ResolversTypes['Espacio']>, ParentType, ContextType, RequireFields<MutationCreateEspacioArgs, 'input'>>;
  createReserva?: Resolver<Maybe<ResolversTypes['Reserva']>, ParentType, ContextType, RequireFields<MutationCreateReservaArgs, 'input'>>;
  createSalida?: Resolver<Maybe<ResolversTypes['Salida']>, ParentType, ContextType, RequireFields<MutationCreateSalidaArgs, 'input'>>;
  createUsuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<MutationCreateUsuarioArgs, 'input'>>;
  createVehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType, RequireFields<MutationCreateVehiculoArgs, 'input'>>;
  deleteEntrada?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEntradaArgs, 'id'>>;
  deleteEspacio?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEspacioArgs, 'id'>>;
  deleteReserva?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteReservaArgs, 'id'>>;
  deleteSalida?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteSalidaArgs, 'id'>>;
  deleteUsuario?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUsuarioArgs, 'id'>>;
  deleteVehiculo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteVehiculoArgs, 'id'>>;
  updateEntrada?: Resolver<Maybe<ResolversTypes['Entrada']>, ParentType, ContextType, RequireFields<MutationUpdateEntradaArgs, 'id' | 'input'>>;
  updateEspacio?: Resolver<Maybe<ResolversTypes['Espacio']>, ParentType, ContextType, RequireFields<MutationUpdateEspacioArgs, 'id' | 'input'>>;
  updateReserva?: Resolver<Maybe<ResolversTypes['Reserva']>, ParentType, ContextType, RequireFields<MutationUpdateReservaArgs, 'id' | 'input'>>;
  updateSalida?: Resolver<Maybe<ResolversTypes['Salida']>, ParentType, ContextType, RequireFields<MutationUpdateSalidaArgs, 'id' | 'input'>>;
  updateUsuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<MutationUpdateUsuarioArgs, 'id' | 'input'>>;
  updateVehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType, RequireFields<MutationUpdateVehiculoArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  entrada?: Resolver<Maybe<ResolversTypes['Entrada']>, ParentType, ContextType, RequireFields<QueryEntradaArgs, 'id'>>;
  entradas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entrada']>>>, ParentType, ContextType>;
  espacio?: Resolver<Maybe<ResolversTypes['Espacio']>, ParentType, ContextType, RequireFields<QueryEspacioArgs, 'id'>>;
  espacios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Espacio']>>>, ParentType, ContextType>;
  reserva?: Resolver<Maybe<ResolversTypes['Reserva']>, ParentType, ContextType, RequireFields<QueryReservaArgs, 'id'>>;
  reservas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reserva']>>>, ParentType, ContextType>;
  salida?: Resolver<Maybe<ResolversTypes['Salida']>, ParentType, ContextType, RequireFields<QuerySalidaArgs, 'id'>>;
  salidas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Salida']>>>, ParentType, ContextType>;
  usuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<QueryUsuarioArgs, 'id'>>;
  usuarios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Usuario']>>>, ParentType, ContextType>;
  vehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType, RequireFields<QueryVehiculoArgs, 'id'>>;
  vehiculos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehiculo']>>>, ParentType, ContextType>;
};

export type ReservaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reserva'] = ResolversParentTypes['Reserva']> = {
  fechaReserva?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  usuario?: Resolver<ResolversTypes['Usuario'], ParentType, ContextType>;
  vehiculo?: Resolver<ResolversTypes['Vehiculo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalidaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Salida'] = ResolversParentTypes['Salida']> = {
  fecha_salida?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  other_fields?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehiculo?: Resolver<Maybe<ResolversTypes['Vehiculo']>, ParentType, ContextType>;
  vehiculo_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  modelo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usuario?: Resolver<ResolversTypes['Usuario'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Entrada?: EntradaResolvers<ContextType>;
  Espacio?: EspacioResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reserva?: ReservaResolvers<ContextType>;
  Salida?: SalidaResolvers<ContextType>;
  Usuario?: UsuarioResolvers<ContextType>;
  Vehiculo?: VehiculoResolvers<ContextType>;
};

