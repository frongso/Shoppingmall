"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_model_1 = require("./../../model/role.model");
const role_1 = require("./../../entities/role");
const user_1 = require("./../../entities/user");
const rsm_role_map_use_1 = require("./../../entities/rsm_role_map_use");
const routing_controllers_1 = require("routing-controllers");
let RoleController = class RoleController {
    getall() {
        return role_1.Role.find();
    }
    getselect(roleid, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const rolemapuserselect = yield rsm_role_map_use_1.RoleMapUser.find({
                where: [{ role: roleid }],
            });
            return response.send(rolemapuserselect);
        });
    }
    save(role, user) {
        return __awaiter(this, void 0, void 0, function* () {
            role_1.Role.save(role);
            const rolemapuser = new rsm_role_map_use_1.RoleMapUser();
            rolemapuser.role = role;
            rolemapuser.user = user;
            rsm_role_map_use_1.RoleMapUser.save(rolemapuser);
        });
    }
    delete(roleid, response) {
        return __awaiter(this, void 0, void 0, function* () {
            role_1.Role.delete(roleid);
            const rolemapuserDel = yield rsm_role_map_use_1.RoleMapUser.find({
                where: [{ role: roleid }],
            });
            rsm_role_map_use_1.RoleMapUser.remove(rolemapuserDel);
            return response.sendStatus(200);
        });
    }
    update(updaterolemodel) {
        return __awaiter(this, void 0, void 0, function* () {
            role_1.Role.update({ id: updaterolemodel.roleid }, updaterolemodel.role);
            rsm_role_map_use_1.RoleMapUser.update({ role: updaterolemodel.role }, updaterolemodel.users);
        });
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getall", null);
__decorate([
    routing_controllers_1.Get('/select'),
    __param(0, routing_controllers_1.QueryParam('id')), __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getselect", null);
__decorate([
    routing_controllers_1.Post('/save'),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_1.Role, user_1.User]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "save", null);
__decorate([
    routing_controllers_1.Delete('/delete'),
    __param(0, routing_controllers_1.QueryParam('id')), __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "delete", null);
__decorate([
    routing_controllers_1.Post('/update'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_model_1.UpdateRoleModel]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
RoleController = __decorate([
    routing_controllers_1.JsonController('/role')
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controlller.js.map