import { graphql } from '../__generated__';

export const REFRESH_TOKEN = graphql(`
  mutation Refresh {
    refresh {
      accesstoken
      refreshtoken
      expiresin
    }
  }
`);

export const LOGIN_USER = graphql(`
  mutation LoginUser($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      email
      accesstoken
      refreshtoken
      id
      expiresin
    }
  }
`);

export const SIGN_UP = graphql(`
  mutation SignUp($email: String!, $password: String!) {
    signup(signupInput: { email: $email, password: $password }) {
      email
    }
  }
`);

export const GOOGLE_AUTH = graphql(`
  mutation GoogleAuth($idToken: String!) {
    googleAuth(idToken: $idToken) {
      email
      accesstoken
      refreshtoken
      id
      expiresin
    }
  }
`);
