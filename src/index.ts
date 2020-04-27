import { UserController } from './controller/user.controller';
import bodyParser from 'body-parser';
import { createExpressServer } from 'routing-controllers';
import { TestController } from './controller/test.controller';
import { createConnection } from 'typeorm';
import { RoleController } from './controller/role.controlller';
const port = 3000;
createConnection()
  .then((connection) => {
    const app = createExpressServer({
      controllers: [TestController, UserController, RoleController],
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log('Hello world');
    });
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
  });
