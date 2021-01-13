export const USER_FRAGMEMNT = `
  fragment UserParts on User {
    id
    userName
    email
    firstName
    lastName
    bio
    posts {
      id
      caption
    }
  }
`;