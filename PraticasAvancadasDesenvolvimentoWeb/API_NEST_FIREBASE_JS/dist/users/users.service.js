"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const firebaseConfig_1 = require("../config/firebaseConfig");
let UsersService = class UsersService {
    constructor() {
        this.collectionName = 'users';
    }
    async createUser(createUserDto) {
        const userRef = firebaseConfig_1.db.collection(this.collectionName).doc();
        await userRef.set(createUserDto);
    }
    async searchUsersByName(name) {
        const usersRef = firebaseConfig_1.db.collection(this.collectionName);
        const snapshot = await usersRef
            .where('name', '>=', name)
            .where('name', '<=', name + '\uf8ff')
            .get();
        if (snapshot.empty) {
            return [];
        }
        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        return users;
    }
    async findAllUsers() {
        const usersRef = firebaseConfig_1.db.collection(this.collectionName);
        const snapshot = await usersRef.get();
        if (snapshot.empty) {
            return [];
        }
        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        return users;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map