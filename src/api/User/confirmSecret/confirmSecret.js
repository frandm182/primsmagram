import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args, { request }) => {
      const { secret, email } = args;
      const user  = await prisma.user({ email });
      if (user.loginSecret === secret) {
        //JWT
        await prisma.updateUser({
          where: { id: user.id },
          data: { loginSecret: '' }
        });
        return generateToken(user.id);
      } else {
        throw new Error('Wrong email secret')
      }      
    }
  }
};