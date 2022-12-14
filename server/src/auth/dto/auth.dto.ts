import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}
