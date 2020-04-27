"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./controller/user.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const routing_controllers_1 = require("routing-controllers");
const test_controller_1 = require("./controller/test.controller");
const typeorm_1 = require("typeorm");
const role_controlller_1 = require("./controller/role.controlller");
const port = 3000;
typeorm_1.createConnection()
    .then((connection) => {
    const app = routing_controllers_1.createExpressServer({
        controllers: [test_controller_1.TestController, user_controller_1.UserController, role_controlller_1.RoleController],
    });
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log('Hello world');
    });
})
    .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
});
//# sourceMappingURL=index.js.map