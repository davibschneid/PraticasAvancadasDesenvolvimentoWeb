import { UsersService } from './users.service';
import { CreateUserDto } from './CreateUser.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<CreateUserDto[]>;
    create(createUserDto: CreateUserDto): Promise<string>;
    searchUsers(name: string): Promise<CreateUserDto[]>;
}
