/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CurrentWeather = {
  __typename?: 'CurrentWeather';
  feelsLike: Scalars['Int']['output'];
  humidity: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pressure: Scalars['Int']['output'];
  temperature: Scalars['Int']['output'];
  wind: Wind;
};

export type ForecastWeather = {
  __typename?: 'ForecastWeather';
  feelsLike: Scalars['Int']['output'];
  humidity: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pressure: Scalars['Int']['output'];
  temperature: Scalars['Int']['output'];
  time: Scalars['DateTime']['output'];
  wind: Wind;
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  email: Scalars['String']['output'];
  hasPassword: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  locations: Array<Location>;
  refreshtoken?: Maybe<Scalars['String']['output']>;
  userSettings: UserSettings;
};

export type Location = {
  __typename?: 'Location';
  country: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  stars: Scalars['Int']['output'];
  state: Scalars['String']['output'];
};

export type LocationsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accesstoken: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expiresin: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  locations: Array<Location>;
  refreshtoken?: Maybe<Scalars['String']['output']>;
  userSettings: UserSettings;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserLocation: Location;
  googleAuth: LoginResponse;
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  refresh: RefreshTokenResponse;
  removeUserLocation: Location;
  signup: User;
  updateUser: User;
};


export type MutationAddUserLocationArgs = {
  userLocationInput: UserLocationInput;
};


export type MutationGoogleAuthArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveUserLocationArgs = {
  userLocationInput: UserLocationInput;
};


export type MutationSignupArgs = {
  signupInput: LoginInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  updateUserInput: UpdateUserInput;
};

export type NameCountryInput = {
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getLocation: Location;
  getLocationByNameCountry: Location;
  getUser?: Maybe<GetUserResponse>;
  getWeather: Weather;
  locations: Array<Location>;
  topLocations: Array<Location>;
};


export type QueryGetLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetLocationByNameCountryArgs = {
  nameCountryInput: NameCountryInput;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWeatherArgs = {
  locationId: Scalars['Int']['input'];
};


export type QueryLocationsArgs = {
  locationsInput: LocationsInput;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  accesstoken: Scalars['String']['output'];
  expiresin: Scalars['Float']['output'];
  refreshtoken: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  fetchedWeather: Weather;
};


export type SubscriptionFetchedWeatherArgs = {
  locationId: Scalars['Int']['input'];
};

export type UpdatePasswordInput = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  googleId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<UpdatePasswordInput>;
  refreshtoken?: InputMaybe<Scalars['String']['input']>;
  userSettings?: InputMaybe<UserSettingsInput>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  locations: Array<Location>;
  refreshtoken?: Maybe<Scalars['String']['output']>;
  userSettings: UserSettings;
};

export type UserLocationInput = {
  locationId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UserSettings = {
  __typename?: 'UserSettings';
  id: Scalars['Int']['output'];
  language: Scalars['String']['output'];
  locationNumber: Scalars['Int']['output'];
  theme: Scalars['String']['output'];
};

export type UserSettingsInput = {
  language: Scalars['String']['input'];
  locationNumber: Scalars['Int']['input'];
  theme: Scalars['String']['input'];
};

export type Weather = {
  __typename?: 'Weather';
  current: CurrentWeather;
  forecasts: Array<ForecastWeather>;
  id: Scalars['Int']['output'];
  location: Location;
  updatedAt: Scalars['DateTime']['output'];
};

export type Wind = {
  __typename?: 'Wind';
  deg: Scalars['Int']['output'];
  gust: Scalars['Float']['output'];
  speed: Scalars['Float']['output'];
};

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'RefreshTokenResponse', accesstoken: string, refreshtoken: string, expiresin: number } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', email: string, accesstoken: string, refreshtoken?: string | null, id: number, expiresin: number } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', email: string } };

export type GoogleAuthMutationVariables = Exact<{
  idToken: Scalars['String']['input'];
}>;


export type GoogleAuthMutation = { __typename?: 'Mutation', googleAuth: { __typename?: 'LoginResponse', email: string, accesstoken: string, refreshtoken?: string | null, id: number, expiresin: number } };

export type LocationFieldsFragment = { __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number };

export type UserSettingsFieldsFragment = { __typename?: 'UserSettings', theme: string, locationNumber: number, language: string };

export type WindFieldsFragment = { __typename?: 'Wind', speed: number, deg: number };

export type CurrentWeatherFieldsFragment = { __typename?: 'CurrentWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, wind: { __typename?: 'Wind', speed: number, deg: number } };

export type ForecastWeatherFieldsFragment = { __typename?: 'ForecastWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, time: any, wind: { __typename?: 'Wind', speed: number, deg: number } };

export type WeatherFieldsFragment = { __typename?: 'Weather', id: number, updatedAt: any, location: { __typename?: 'Location', name: string, country: string }, current: { __typename?: 'CurrentWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, wind: { __typename?: 'Wind', speed: number, deg: number } }, forecasts: Array<{ __typename?: 'ForecastWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, time: any, wind: { __typename?: 'Wind', speed: number, deg: number } }> };

export type LocationsQueryVariables = Exact<{
  name: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number }> };

export type AddUserLocationMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  locationId: Scalars['Int']['input'];
}>;


export type AddUserLocationMutation = { __typename?: 'Mutation', addUserLocation: { __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number } };

export type RemoveUserLocationMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  locationId: Scalars['Int']['input'];
}>;


export type RemoveUserLocationMutation = { __typename?: 'Mutation', removeUserLocation: { __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number } };

export type GetLocationByNameCountryQueryVariables = Exact<{
  name: Scalars['String']['input'];
  country: Scalars['String']['input'];
}>;


export type GetLocationByNameCountryQuery = { __typename?: 'Query', getLocationByNameCountry: { __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number } };

export type GetLocationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', getLocation: { __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number } };

export type TopLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type TopLocationsQuery = { __typename?: 'Query', topLocations: Array<{ __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number }> };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'GetUserResponse', id: number, email: string, hasPassword: boolean, locations: Array<{ __typename?: 'Location', id: number, name: string, country: string, state: string, lat: number, lon: number, stars: number }>, userSettings: { __typename?: 'UserSettings', theme: string, locationNumber: number, language: string } } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  userSettings: UserSettingsInput;
  password?: InputMaybe<UpdatePasswordInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, email: string, userSettings: { __typename?: 'UserSettings', theme: string, locationNumber: number, language: string } } };

export type WeatherQueryVariables = Exact<{
  locationId: Scalars['Int']['input'];
}>;


export type WeatherQuery = { __typename?: 'Query', getWeather: { __typename?: 'Weather', id: number, updatedAt: any, location: { __typename?: 'Location', name: string, country: string }, current: { __typename?: 'CurrentWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, wind: { __typename?: 'Wind', speed: number, deg: number } }, forecasts: Array<{ __typename?: 'ForecastWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, time: any, wind: { __typename?: 'Wind', speed: number, deg: number } }> } };

export type SubscribeToFetchedForecastSubscriptionVariables = Exact<{
  locationId: Scalars['Int']['input'];
}>;


export type SubscribeToFetchedForecastSubscription = { __typename?: 'Subscription', fetchedWeather: { __typename?: 'Weather', id: number, updatedAt: any, location: { __typename?: 'Location', name: string, country: string }, current: { __typename?: 'CurrentWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, wind: { __typename?: 'Wind', speed: number, deg: number } }, forecasts: Array<{ __typename?: 'ForecastWeather', name: string, icon: string, temperature: number, feelsLike: number, pressure: number, humidity: number, time: any, wind: { __typename?: 'Wind', speed: number, deg: number } }> } };

export const LocationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<LocationFieldsFragment, unknown>;
export const UserSettingsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"locationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]} as unknown as DocumentNode<UserSettingsFieldsFragment, unknown>;
export const WindFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}}]} as unknown as DocumentNode<WindFieldsFragment, unknown>;
export const CurrentWeatherFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}}]} as unknown as DocumentNode<CurrentWeatherFieldsFragment, unknown>;
export const ForecastWeatherFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ForecastWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ForecastWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}}]} as unknown as DocumentNode<ForecastWeatherFieldsFragment, unknown>;
export const WeatherFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Weather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentWeatherFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forecasts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ForecastWeatherFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ForecastWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ForecastWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}}]} as unknown as DocumentNode<WeatherFieldsFragment, unknown>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accesstoken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshtoken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresin"}}]}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"accesstoken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshtoken"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresin"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const GoogleAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GoogleAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"accesstoken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshtoken"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresin"}}]}}]}}]} as unknown as DocumentNode<GoogleAuthMutation, GoogleAuthMutationVariables>;
export const LocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"locations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationsInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<LocationsQuery, LocationsQueryVariables>;
export const AddUserLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLocationInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<AddUserLocationMutation, AddUserLocationMutationVariables>;
export const RemoveUserLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUserLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUserLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLocationInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<RemoveUserLocationMutation, RemoveUserLocationMutationVariables>;
export const GetLocationByNameCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationByNameCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLocationByNameCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nameCountryInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<GetLocationByNameCountryQuery, GetLocationByNameCountryQueryVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const TopLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}}]} as unknown as DocumentNode<TopLocationsQuery, TopLocationsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSettingsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasPassword"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"locationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userSettings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSettingsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userSettings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userSettings"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSettingsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"locationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeatherFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ForecastWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ForecastWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Weather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentWeatherFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forecasts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ForecastWeatherFields"}}]}}]}}]} as unknown as DocumentNode<WeatherQuery, WeatherQueryVariables>;
export const SubscribeToFetchedForecastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeToFetchedForecast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchedWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeatherFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WindFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wind"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speed"}},{"kind":"Field","name":{"kind":"Name","value":"deg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ForecastWeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ForecastWeather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WindFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeatherFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Weather"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentWeatherFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forecasts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ForecastWeatherFields"}}]}}]}}]} as unknown as DocumentNode<SubscribeToFetchedForecastSubscription, SubscribeToFetchedForecastSubscriptionVariables>;