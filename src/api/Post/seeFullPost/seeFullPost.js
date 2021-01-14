import { prisma } from '../../../../generated/prisma-client';
import { FULL_POST_FRAGMENT } from '../../../fragments';

export default {
  Query: {
    seeFullPost: (_, args) => {
      const { id } = args;
      console.log(id)
      return prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
    }
  }
}