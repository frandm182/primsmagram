export const COMMENT_FRAGMEMNT = `
  fragment CommentParts on Comment {
    id
    text
    user {
      userName
    }
  }
`;