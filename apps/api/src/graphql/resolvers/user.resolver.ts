// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { EUserRole, User } from '../data-access-react'
import { v4 as uuidv4 } from 'uuid';

@Resolver('User')
export class UserResolver {
  private users:User[] = [
    {
      id: "abc",
      username: "username_abc",
      email: "abc@abc.com",
      phone: "1112223333",
      firstName: "abc_firstName",
      lastName: "abc_lastName",
      roles: [EUserRole.Admin]
    },
    {
      id: "def",
      username: "username_def",
      email: "def@def.com",
      phone: "1112223333",
      firstName: "def_firstName",
      lastName: "def_lastName",
      roles: [EUserRole.User]
    }
  ];

  @Query('allUsers')
  getAllSets(): User[] {
    return this.users;
  }

  @Mutation()
  addUser(
    @Args('usename') name: string,
    @Args('email') email: string,
    @Args('phone') phone: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('roles') roles: EUserRole[] = null
  ) {
    const newUser: User = {
      id: uuidv4(),
      username: name,
      email,
      phone,
      firstName,
      lastName,
      roles
    };

    this.users.push(newUser);

    return newUser;
  }
}
