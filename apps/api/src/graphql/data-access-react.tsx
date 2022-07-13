import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum EUserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export enum EPronouns {
  He = 'HE',
  She = 'SHE',
  They = 'THEY'
}

export type Node = {
  id: Scalars['ID'];
};

export type SearchResult = User | Contact | ContactGroup;

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roles?: Maybe<Array<EUserRole>>;
};

export type Contact = Node & {
  __typename?: 'Contact';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  dob: Scalars['Date'];
  pronouns?: Maybe<Array<EPronouns>>;
};

export type ContactDirectory = Node & {
  __typename?: 'ContactDirectory';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  owners?: Maybe<Array<Maybe<User>>>;
  accessRoles?: Maybe<Array<EUserRole>>;
  contacts?: Maybe<Array<Contact>>;
};

export type ContactGroup = Node & {
  __typename?: 'ContactGroup';
  id: Scalars['ID'];
  owners?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  contacts?: Maybe<Array<Contact>>;
};

export type AddUserInput = {
  id?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roles?: InputMaybe<Array<EUserRole>>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  allContacts?: Maybe<Array<Maybe<Contact>>>;
  search: Array<SearchResult>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type CreateUserResponseType = MutationResponse & {
  __typename?: 'CreateUserResponseType';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export type UpdateUserResponseType = MutationResponse & {
  __typename?: 'UpdateUserResponseType';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUserEmail?: Maybe<UpdateUserResponseType>;
  addUser2?: Maybe<CreateUserResponseType>;
  addUser?: Maybe<User>;
};


export type MutationUpdateUserEmailArgs = {
  id: Scalars['ID'];
  email: Scalars['String'];
};


export type MutationAddUser2Args = {
  user: AddUserInput;
};


export type MutationAddUserArgs = {
  id?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
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
  Date: ResolverTypeWrapper<Scalars['Date']>;
  EUserRole: EUserRole;
  EPronouns: EPronouns;
  Node: ResolversTypes['User'] | ResolversTypes['Contact'] | ResolversTypes['ContactDirectory'] | ResolversTypes['ContactGroup'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  SearchResult: ResolversTypes['User'] | ResolversTypes['Contact'] | ResolversTypes['ContactGroup'];
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactDirectory: ResolverTypeWrapper<ContactDirectory>;
  ContactGroup: ResolverTypeWrapper<ContactGroup>;
  AddUserInput: AddUserInput;
  Query: ResolverTypeWrapper<{}>;
  MutationResponse: ResolversTypes['CreateUserResponseType'] | ResolversTypes['UpdateUserResponseType'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserResponseType: ResolverTypeWrapper<CreateUserResponseType>;
  UpdateUserResponseType: ResolverTypeWrapper<UpdateUserResponseType>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  Node: ResolversParentTypes['User'] | ResolversParentTypes['Contact'] | ResolversParentTypes['ContactDirectory'] | ResolversParentTypes['ContactGroup'];
  ID: Scalars['ID'];
  SearchResult: ResolversParentTypes['User'] | ResolversParentTypes['Contact'] | ResolversParentTypes['ContactGroup'];
  User: User;
  String: Scalars['String'];
  Contact: Contact;
  ContactDirectory: ContactDirectory;
  ContactGroup: ContactGroup;
  AddUserInput: AddUserInput;
  Query: {};
  MutationResponse: ResolversParentTypes['CreateUserResponseType'] | ResolversParentTypes['UpdateUserResponseType'];
  Boolean: Scalars['Boolean'];
  CreateUserResponseType: CreateUserResponseType;
  UpdateUserResponseType: UpdateUserResponseType;
  Mutation: {};
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'User' | 'Contact' | 'ContactDirectory' | 'ContactGroup', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'User' | 'Contact' | 'ContactGroup', ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['EUserRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  pronouns?: Resolver<Maybe<Array<ResolversTypes['EPronouns']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactDirectoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactDirectory'] = ResolversParentTypes['ContactDirectory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  accessRoles?: Resolver<Maybe<Array<ResolversTypes['EUserRole']>>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<ResolversTypes['Contact']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactGroup'] = ResolversParentTypes['ContactGroup']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<ResolversTypes['Contact']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  allUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  allContacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  search?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'term'>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'CreateUserResponseType' | 'UpdateUserResponseType', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreateUserResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponseType'] = ResolversParentTypes['CreateUserResponseType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserResponseType'] = ResolversParentTypes['UpdateUserResponseType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateUserEmail?: Resolver<Maybe<ResolversTypes['UpdateUserResponseType']>, ParentType, ContextType, RequireFields<MutationUpdateUserEmailArgs, 'id' | 'email'>>;
  addUser2?: Resolver<Maybe<ResolversTypes['CreateUserResponseType']>, ParentType, ContextType, RequireFields<MutationAddUser2Args, 'user'>>;
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'username' | 'email' | 'phone' | 'firstName' | 'lastName'>>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  ContactDirectory?: ContactDirectoryResolvers<ContextType>;
  ContactGroup?: ContactGroupResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  CreateUserResponseType?: CreateUserResponseTypeResolvers<ContextType>;
  UpdateUserResponseType?: UpdateUserResponseTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};
