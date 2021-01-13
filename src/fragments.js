export const USER_FRAGMEMNT = `
  id
  userName
`;

export const COMMENT_FRAGMEMNT = `
  id
  text
  user {
    ${USER_FRAGMEMNT}
  }
`;

export const FILE_FRAGMEMNT = `
  id
  url
`;

export const FULL_POST_FRAGMEMNT = `
  fragment PostParts on Post {
    id
    location
    caption
    user {
      ${USER_FRAGMEMNT}
    }
    files {
      ${FILE_FRAGMEMNT}
    }
    comments {
      ${COMMENT_FRAGMEMNT}
    }
  }
`;
