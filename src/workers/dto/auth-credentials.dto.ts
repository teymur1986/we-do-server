import { IsNotEmpty, MinLength, IsEmail, IsString, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
    @IsNotEmpty({ message: `Email can't be empty` })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: `Password can't be empty` })
    @MinLength(8, { message: `Password should not be less then 8 characters length` })
    @MaxLength(20, { message: `Password should not be more then 20 characters length` })
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'Password should contain capital letters and digits.' })
    password: string;

    @IsNotEmpty({ message: `First name can't be empty` })
    @IsString()
    firstName: string;

    @IsNotEmpty({ message: `Last name can't be empty` })
    @IsString()
    lastName: string;
}
