import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
}
