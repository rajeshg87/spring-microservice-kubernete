import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

     // private user_url = 'http://localhost:8080/user';
    // user_url = 'http://192.168.99.115:31001/user/user';
    private user_url = 'http://microservices.info/user/user';

    private add_user_url = this.user_url + '/add';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User> {
        return this.http.get<User>(this.user_url);
    }

    addUser(user): Observable<User> {
        return this.http.post<User>(this.add_user_url, user);
    }

    deleteUser(name): Observable<User> {
        const url = `${this.user_url}/${name}`;
        return this.http.delete<User>(url, httpOptions);
    }

    deleteAll(): Observable<User> {
        const url = `${this.user_url}/delete`;
        return this.http.delete<User>(url, httpOptions);
    }

}
