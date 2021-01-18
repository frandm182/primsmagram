import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, firstName = '', lastName = '', bio = '' } = args;
      const exits = await prisma.$exists.user({ OR: [{ userName }, { email }] });
      if (exits) {
        throw Error('This username is already taken');
      }
      await prisma.createUser({ userName, email, firstName, lastName, bio });
      return true;
      
    }
  }
}