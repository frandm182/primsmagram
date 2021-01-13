import { prisma } from '../../../generated/prisma-client';

export default {
  User: {
    fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
    itsFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.$exists.user({ 
        AND: [
          { id: user.id }, { following_some: { id: parentId } }
        ]
      });
    },
    itsMe: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  },
  Post: {
    isLiked: (parent, __, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          { user: { id: user.id } },
          { post: { id } }
        ] 
      }) 
    }
  }
}