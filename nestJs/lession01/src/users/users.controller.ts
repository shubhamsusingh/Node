import { Controller, Get, Param, Post ,Body, Patch, Query} from '@nestjs/common';
import { UsersService } from './users.service';
export interface User {
    name: string;
    email: string;
    role:'Intern' | 'Engineer' | 'senior-Dev';
    // other user properties
  }
@Controller('users')


export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Get()  //Get /users
    findAll(@Query('role') role ? :'Intern'|'Engineer'|'senior-Dev'){
        return this.usersService.findAll(role)
    }
   
    @Get(':id')  // Get /users/:id
    findOne(@Param('id')id:string){
       return this.usersService.findOne(+id)
    }
    @Post()
    create(@Body() user: User) {
      return this.usersService.create(user);
    }
    @Patch(':id')
    update(@Param('id') id:string,@Body() userUpdate:{}){
        return {id, ...userUpdate}
    }
   

}
  