import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { secret, email } = args;
      console.log({ secret, email });

      const user  = await prisma.user({ email });
      if (user.loginSecret === secret) {
        //JWT
        console.log(user);
        return generateToken(user.id);
      } else {
        throw new Error('Wrong email secret')
      }      
    }
  }
};