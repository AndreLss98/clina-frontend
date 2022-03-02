import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface LoginDto {
  email: string;
  password: string;
}

const users = [
  { email: 'default@clina.com', password: '123456' },
  { email: 'admin@clina.com', password: '123456' },
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginDto: LoginDto) {
    const user = users.find(user => user.email === loginDto.email && user.password === loginDto.password);
    console.log('User from service: ', user)
    return of(user);
  }
}
