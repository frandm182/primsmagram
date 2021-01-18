import { prisma } from '../../../generated/prisma-client';

export default {
  User: {
    posts: ({ id }) => prisma.user({ id }).posts(),
    following: ({ id }) => prisma.user({ id }).following(),
    following: ({ id }) => prisma.user({ id }).following(),
    likes: ({ id }) => prisma.user({ id }).likes(),
    comments: ({ id }) => prisma.user({ id }).comments(),
    rooms: ({ id }) => prisma.user({ id }).rooms(),
    followingCount: ({ id }) => prisma.usersConnection({ where: { followers_some: { id } } }).aggregate().count(),
    followersCount: ({ id }) => prisma.usersConnection({ where: { following_some: { id } } }).aggregate().count(),
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
  }
}