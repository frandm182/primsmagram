import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

import './env';
import schema from './schema';
import './passport';
import { authenticateJwt } from './passport';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => {
    console.log(`✔ Server running on port ${PORT}`);
});