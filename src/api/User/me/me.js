import { prisma } from '../../../../generated/prisma-client';
import { USER_FRAGMEMNT } from '../../../fragments';

export default {
  Query: {
    me: async(_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;      
      const userResponse = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userResponse,
        posts
      };
    }
  }
}