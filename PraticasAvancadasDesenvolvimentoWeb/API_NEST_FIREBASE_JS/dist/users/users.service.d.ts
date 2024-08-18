import { CreateUserDto } from './CreateUser.dto';
export declare class UsersService {
    private readonly collectionName;
    createUser(createUserDto: CreateUserDto): Promise<void>;
    searchUsersByName(name: string): Promise<CreateUserDto[]>;
    findAllUsers(): Promise<CreateUserDto[]>;
}
