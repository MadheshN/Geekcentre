import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {
      "username": "madhesh",
      "password": "mad@13",
      "id": 1
    },
    // Add other users from db.json here...
  ];

  constructor() {}

  login(username: string, password: string): any {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return user; // Return the User object
    } else {
      return null;
    }
  }

  getCurrentUser(): any {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }
}
