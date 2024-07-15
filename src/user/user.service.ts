import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  // this is hard coded in real applicaion we have to use typeorm with database etc

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      email: 'azhermurad@gmail.com',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      email: 'azhermuar@gmail.cm',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
