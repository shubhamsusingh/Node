import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            'id':1,
            "name":"Shubham Singh",
            "email":"singhshubham68738@gmail.com",
            "role":"Intern",
        },
        {
            'id':2,
            "name":"Sonali Singh",
            "email":"singhsonali68738@gmail.com",
            "role":"Engineer",
        },
        {
            'id':3,
            "name":"Vineet Singh",
            "email":"singhvineet68738@gmail.com",
            "role":"senior- Dev",
        }
    ]
    findAll(role?: 'Intern' | 'senior-Dev' | 'Engineer'){
        if(role){
           return this.users.filter(user=>user.role === role) 
        }
        return this.users
    }
    findOne(id:number){
        const user=this.users.find(user=>user.id===id)
        return user;
    }
    create(user:{name:string,email:string,role:'Intern' | 'Engineer'|'senior-Dev'}){
        const userByHighestId=[...this.users].sort((a,b)=>
        b.id-a.id)
        const newUser={
            id: userByHighestId[0].id+1,
            ...user
        }
        this.users.push(newUser)
        return newUser;
    }

   

}
