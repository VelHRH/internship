import { graphql } from '../__generated__';

export const GET_LOCATIONS = graphql(`
  query locations($name: String!, $limit: Int, $offset: Int) {
    locations(locationsInput: { name: $name, limit: $limit, offset: $offset }) {
      ...LocationFields
    }
  }
`);

export const ADD_LOCATION = graphql(`
  mutation AddUserLocation($userId: Int!, $locationId: Int!) {
    addUserLocation(
      userLocationInput: { userId: $userId, locationId: $locationId }
    ) {
      ...LocationFields
    }
  }
`);

export const REMOVE_LOCATION = graphql(`
  mutation RemoveUserLocation($userId: Int!, $locationId: Int!) {
    removeUserLocation(
      userLocationInput: { userId: $userId, locationId: $locationId }
    ) {
      ...LocationFields
    }
  }
`);

export const GET_LOCATION_BY_NAME_COUNTRY = graphql(`
  query GetLocationByNameCountry($name: String!, $country: String!) {
    getLocationByNameCountry(
      nameCountryInput: { name: $name, country: $country }
    ) {
      ...LocationFields
    }
  }
`);

export const GET_LOCATION_BY_ID = graphql(`
  query GetLocation($id: Int!) {
    getLocation(id: $id) {
      ...LocationFields
    }
  }
`);

export const GET_TOP_LOCATIONS = graphql(`
  query TopLocations {
    topLocations {
      ...LocationFields
    }
  }
`);
