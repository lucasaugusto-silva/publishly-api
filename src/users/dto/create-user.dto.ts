import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    @MaxLength(255, { message: 'O nome deve ter no máximo 255 caracteres' })
    name: string;

    @IsEmail({}, { message: 'E-mail inválido' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @MaxLength(255, { message: 'O e-mail deve ter no máximo 255 caracteres' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    @MaxLength(255)
    password: string;
}
