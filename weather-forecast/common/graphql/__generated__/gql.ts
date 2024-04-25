/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Refresh {\n    refresh {\n      accesstoken\n      refreshtoken\n      expiresin\n    }\n  }\n": types.RefreshDocument,
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation SignUp($email: String!, $password: String!) {\n    signup(signupInput: { email: $email, password: $password }) {\n      email\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation GoogleAuth($idToken: String!) {\n    googleAuth(idToken: $idToken) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n": types.GoogleAuthDocument,
    "\n  fragment LocationFields on Location {\n    id\n    name\n    country\n    state\n    lat\n    lon\n    stars\n  }\n": types.LocationFieldsFragmentDoc,
    "\n  fragment UserSettingsFields on UserSettings {\n    theme\n    locationNumber\n    language\n  }\n": types.UserSettingsFieldsFragmentDoc,
    "\n  fragment WindFields on Wind {\n    speed\n    deg\n  }\n": types.WindFieldsFragmentDoc,
    "\n  fragment CurrentWeatherFields on CurrentWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n  }\n": types.CurrentWeatherFieldsFragmentDoc,
    "\n  fragment ForecastWeatherFields on ForecastWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n    time\n  }\n": types.ForecastWeatherFieldsFragmentDoc,
    "\n  fragment WeatherFields on Weather {\n    id\n    location {\n      name\n      country\n    }\n    updatedAt\n    current {\n      ...CurrentWeatherFields\n    }\n    forecasts {\n      ...ForecastWeatherFields\n    }\n  }\n": types.WeatherFieldsFragmentDoc,
    "\n  query locations($name: String!, $limit: Int, $offset: Int) {\n    locations(locationsInput: { name: $name, limit: $limit, offset: $offset }) {\n      ...LocationFields\n    }\n  }\n": types.LocationsDocument,
    "\n  mutation AddUserLocation($userId: Int!, $locationId: Int!) {\n    addUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n": types.AddUserLocationDocument,
    "\n  mutation RemoveUserLocation($userId: Int!, $locationId: Int!) {\n    removeUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n": types.RemoveUserLocationDocument,
    "\n  query GetLocationByNameCountry($name: String!, $country: String!) {\n    getLocationByNameCountry(\n      nameCountryInput: { name: $name, country: $country }\n    ) {\n      ...LocationFields\n    }\n  }\n": types.GetLocationByNameCountryDocument,
    "\n  query GetLocation($id: Int!) {\n    getLocation(id: $id) {\n      ...LocationFields\n    }\n  }\n": types.GetLocationDocument,
    "\n  query TopLocations {\n    topLocations {\n      ...LocationFields\n    }\n  }\n": types.TopLocationsDocument,
    "\n  query GetUser($id: Int) {\n    getUser(id: $id) {\n      id\n      email\n      locations {\n        ...LocationFields\n      }\n      userSettings {\n        ...UserSettingsFields\n      }\n      hasPassword\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation UpdateUser(\n    $id: Int!\n    $userSettings: UserSettingsInput!\n    $password: UpdatePasswordInput\n  ) {\n    updateUser(\n      id: $id\n      updateUserInput: { password: $password, userSettings: $userSettings }\n    ) {\n      id\n      email\n      userSettings {\n        ...UserSettingsFields\n      }\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query Weather($locationId: Int!) {\n    getWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n": types.WeatherDocument,
    "\n  subscription SubscribeToFetchedForecast($locationId: Int!) {\n    fetchedWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n": types.SubscribeToFetchedForecastDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Refresh {\n    refresh {\n      accesstoken\n      refreshtoken\n      expiresin\n    }\n  }\n"): (typeof documents)["\n  mutation Refresh {\n    refresh {\n      accesstoken\n      refreshtoken\n      expiresin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUp($email: String!, $password: String!) {\n    signup(signupInput: { email: $email, password: $password }) {\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp($email: String!, $password: String!) {\n    signup(signupInput: { email: $email, password: $password }) {\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GoogleAuth($idToken: String!) {\n    googleAuth(idToken: $idToken) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n"): (typeof documents)["\n  mutation GoogleAuth($idToken: String!) {\n    googleAuth(idToken: $idToken) {\n      email\n      accesstoken\n      refreshtoken\n      id\n      expiresin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LocationFields on Location {\n    id\n    name\n    country\n    state\n    lat\n    lon\n    stars\n  }\n"): (typeof documents)["\n  fragment LocationFields on Location {\n    id\n    name\n    country\n    state\n    lat\n    lon\n    stars\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserSettingsFields on UserSettings {\n    theme\n    locationNumber\n    language\n  }\n"): (typeof documents)["\n  fragment UserSettingsFields on UserSettings {\n    theme\n    locationNumber\n    language\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WindFields on Wind {\n    speed\n    deg\n  }\n"): (typeof documents)["\n  fragment WindFields on Wind {\n    speed\n    deg\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CurrentWeatherFields on CurrentWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n  }\n"): (typeof documents)["\n  fragment CurrentWeatherFields on CurrentWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ForecastWeatherFields on ForecastWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n    time\n  }\n"): (typeof documents)["\n  fragment ForecastWeatherFields on ForecastWeather {\n    name\n    icon\n    temperature\n    feelsLike\n    pressure\n    humidity\n    wind {\n      ...WindFields\n    }\n    time\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WeatherFields on Weather {\n    id\n    location {\n      name\n      country\n    }\n    updatedAt\n    current {\n      ...CurrentWeatherFields\n    }\n    forecasts {\n      ...ForecastWeatherFields\n    }\n  }\n"): (typeof documents)["\n  fragment WeatherFields on Weather {\n    id\n    location {\n      name\n      country\n    }\n    updatedAt\n    current {\n      ...CurrentWeatherFields\n    }\n    forecasts {\n      ...ForecastWeatherFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query locations($name: String!, $limit: Int, $offset: Int) {\n    locations(locationsInput: { name: $name, limit: $limit, offset: $offset }) {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  query locations($name: String!, $limit: Int, $offset: Int) {\n    locations(locationsInput: { name: $name, limit: $limit, offset: $offset }) {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUserLocation($userId: Int!, $locationId: Int!) {\n    addUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserLocation($userId: Int!, $locationId: Int!) {\n    addUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveUserLocation($userId: Int!, $locationId: Int!) {\n    removeUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveUserLocation($userId: Int!, $locationId: Int!) {\n    removeUserLocation(\n      userLocationInput: { userId: $userId, locationId: $locationId }\n    ) {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLocationByNameCountry($name: String!, $country: String!) {\n    getLocationByNameCountry(\n      nameCountryInput: { name: $name, country: $country }\n    ) {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  query GetLocationByNameCountry($name: String!, $country: String!) {\n    getLocationByNameCountry(\n      nameCountryInput: { name: $name, country: $country }\n    ) {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLocation($id: Int!) {\n    getLocation(id: $id) {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  query GetLocation($id: Int!) {\n    getLocation(id: $id) {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TopLocations {\n    topLocations {\n      ...LocationFields\n    }\n  }\n"): (typeof documents)["\n  query TopLocations {\n    topLocations {\n      ...LocationFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($id: Int) {\n    getUser(id: $id) {\n      id\n      email\n      locations {\n        ...LocationFields\n      }\n      userSettings {\n        ...UserSettingsFields\n      }\n      hasPassword\n    }\n  }\n"): (typeof documents)["\n  query GetUser($id: Int) {\n    getUser(id: $id) {\n      id\n      email\n      locations {\n        ...LocationFields\n      }\n      userSettings {\n        ...UserSettingsFields\n      }\n      hasPassword\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser(\n    $id: Int!\n    $userSettings: UserSettingsInput!\n    $password: UpdatePasswordInput\n  ) {\n    updateUser(\n      id: $id\n      updateUserInput: { password: $password, userSettings: $userSettings }\n    ) {\n      id\n      email\n      userSettings {\n        ...UserSettingsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser(\n    $id: Int!\n    $userSettings: UserSettingsInput!\n    $password: UpdatePasswordInput\n  ) {\n    updateUser(\n      id: $id\n      updateUserInput: { password: $password, userSettings: $userSettings }\n    ) {\n      id\n      email\n      userSettings {\n        ...UserSettingsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Weather($locationId: Int!) {\n    getWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n"): (typeof documents)["\n  query Weather($locationId: Int!) {\n    getWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SubscribeToFetchedForecast($locationId: Int!) {\n    fetchedWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n"): (typeof documents)["\n  subscription SubscribeToFetchedForecast($locationId: Int!) {\n    fetchedWeather(locationId: $locationId) {\n      ...WeatherFields\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;