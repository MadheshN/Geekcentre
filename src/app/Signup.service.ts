import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/user");
  }

  addUser(values: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/user", values);
  }
}
