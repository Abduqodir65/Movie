import { Get, Controller, Render, Param, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    root() {
        return { message: 'Hello world!' };
    }

    @Get('/register')
    @Render('register.ejs')
    about() {
        return { info: 'This is the about page.' };
    }

    @Get('/login')
    @Render('login.ejs')
    login() {
        return { info: 'this is the login page' }
    }

    @Get('/home')
    @Render('home')
    home() {
        return { info: 'this in the home page' }
    }
    @Get('/forgot-password')
    @Render('forgot-password')
    forgotPassword() {
        return { text: '' }; 
    }


    @Get('reset-password/:token')
    @Render('reset-password')
    async getResetPasswordPage(@Param('token') token: string) {
        return { token };
    }

    @Get('/movie-detail')
    @Render('movie-detail')
    movieDeatil() {
        return { info: 'hello' }
    }
}