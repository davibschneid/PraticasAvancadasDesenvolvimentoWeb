import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './CreateUser.dto';
import { db } from '../config/firebaseConfig';

@Injectable()
export class UsersService {
  private readonly collectionName = 'users';  // Nome da coleção no Firestore
  
  async createUser(createUserDto: CreateUserDto): Promise<void> {
      const userRef = db.collection(this.collectionName).doc();
      await userRef.set(createUserDto);
    }

    async searchUsersByName(name: string): Promise<CreateUserDto[]> {
      const usersRef = db.collection(this.collectionName);
      const snapshot = await usersRef
        .where('name', '>=', name)
        .where('name', '<=', name + '\uf8ff')
        .get();

      if (snapshot.empty) {
        return [];
      }

      const users: CreateUserDto[] = [];
      snapshot.forEach(doc => {
        users.push(doc.data() as CreateUserDto);
      });

      return users;
    }

    async findAllUsers(): Promise<CreateUserDto[]> {
      const usersRef = db.collection(this.collectionName);
      const snapshot = await usersRef.get();

      if (snapshot.empty) {
        return [];
      }

      const users: CreateUserDto[] = [];
      snapshot.forEach(doc => {
        users.push(doc.data() as CreateUserDto);
      });

      return users;
    }
}
