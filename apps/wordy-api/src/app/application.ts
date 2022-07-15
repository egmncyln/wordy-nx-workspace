import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import helmet from 'helmet';
import authenticationRoutes from '../routes/authentication';

import { checkRequest } from '../middlewares/middlewares';
import { corsOptions } from '../helpers/cors-options';

const application = express();

application.use(cors(corsOptions));
application.use(compression());
application.use(helmet());
application.use(bodyParser.json());
application.use(checkRequest);
application.use(authenticationRoutes);

export default application;
