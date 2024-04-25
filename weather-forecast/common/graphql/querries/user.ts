import { graphql } from '../__generated__';

export const GET_USER = graphql(`
  query GetUser($id: Int) {
    getUser(id: $id) {
      id
      email
      locations {
        ...LocationFields
      }
      userSettings {
        ...UserSettingsFields
      }
      hasPassword
    }
  }
`);

export const UPDATE_USER = graphql(`
  mutation UpdateUser(
    $id: Int!
    $userSettings: UserSettingsInput!
    $password: UpdatePasswordInput
  ) {
    updateUser(
      id: $id
      updateUserInput: { password: $password, userSettings: $userSettings }
    ) {
      id
      email
      userSettings {
        ...UserSettingsFields
      }
    }
  }
`);
