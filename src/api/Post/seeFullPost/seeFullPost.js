import { prisma } from '../../../../generated/prisma-client';
import { COMMENT_FRAGMEMNT } from '../../../fragments';

export default {
  Query: {
    seeFullPost: async(_, args) => {
      const { id } = args;
      const post = await prisma.post({ id });
      const comments = await prisma.post({ id }).comments().$fragment(COMMENT_FRAGMEMNT);
      const files = await prisma.post({ id }).files();
      const user = await prisma.post({ id }).user();

      return { post, comments, files, user };
    }
  }
}