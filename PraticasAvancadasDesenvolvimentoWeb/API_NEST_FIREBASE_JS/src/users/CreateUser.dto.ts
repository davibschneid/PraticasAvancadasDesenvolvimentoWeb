import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'id' })
    readonly id : number;
    @ApiProperty({ example: 'nome' })
    readonly name: string;
    @ApiProperty({ example: 'idade' })
    readonly age: number;
  }
