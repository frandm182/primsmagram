import { prisma } from '../../../../generated/prisma-client';
import { ROOM_FRAGMEMNT } from '../../../fragments';

export default {
  Query: {
    seeRooms: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.rooms({
        where: {
          participants_some: {
            id: user.id
          }
        }
      }).$fragment(ROOM_FRAGMEMNT)
    }
  }
}