import { Controller,Get,Post,Body,Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './CreateUser.dto';
import { ApiTags, ApiQuery, ApiResponse,ApiBody } from '@nestjs/swagger';


@ApiTags('users') // Define uma tag para o Swagger
@Controller('api/users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Usuários retornados com sucesso.', type: [CreateUserDto] }) // Define a resposta de sucesso
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado.' }) // Define a resposta de erro
  async findAll(): Promise<CreateUserDto[]> {
    return this.usersService.findAllUsers();
  }

  @Post()
  @ApiBody({ type: CreateUserDto, description: 'Dados para criar um novo usuário' }) // Define o corpo da requisição
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' }) // Define a resposta de sucesso
  @ApiResponse({ status: 400, description: 'Dados inválidos.' }) // Define a resposta de erro
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    await this.usersService.createUser(createUserDto);
    return 'User created successfully';
  }

  // Nova rota de busca por nome
  @ApiQuery({ name: 'name', required: true, description: 'Nome do usuário para busca' }) // Define o parâmetro de consulta
  @ApiResponse({ status: 200, description: 'Usuários encontrados com sucesso.', type: [CreateUserDto] }) // Define a resposta de sucesso
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' }) // Define a resposta de erro
  @Get('buscapornome')
  async searchUsers(@Query('name') name: string): Promise<CreateUserDto[]> {
    console.log('Name', name);
    const users = await this.usersService.searchUsersByName(name);
    return users;
  }
}
