import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import helmet from 'helmet';
import initialRoute from '../routes/initial.route';
import authRoute from '../routes/auth.route';

import { checkRequest } from '../middlewares/middlewares';
import { corsOptions } from '../helpers/cors-options';

const application = express();

application.use(cors(corsOptions));
application.use(compression());
application.use(helmet());
application.use(bodyParser.json());
application.use(checkRequest);
application.use(initialRoute);
application.use(authRoute);

export default application;
