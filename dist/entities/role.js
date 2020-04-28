"use strict";
// import { BaseEntity, Entity, Column } from 'typeorm';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @Entity('msm_role', { schema: 'shopping_mall' })
// export class Role extends BaseEntity {
//   @Column('bigint', {
//     primary: true,
//     name: 'MSM_ROLE_ID',
//     generated: true,
//     width: 22,
//   })
//   id: number;
//   @Column('varchar', { name: 'MSM_ROLE_NAME', nullable: false, length: 50 })
//   roleName: string;
// }
const typeorm_1 = require("typeorm");
let Role = class Role extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.Column('bigint', {
        name: 'MSM_ROLE_ID',
        primary: true,
        nullable: false,
        width: 22,
    }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        name: 'MSM_ROLE_NAME',
        nullable: false,
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
Role = __decorate([
    typeorm_1.Entity({
        name: 'msm_role',
        schema: 'shopping_mall',
    })
], Role);
exports.Role = Role;
//# sourceMappingURL=role.js.map