import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/userModel';
import { environment } from 'src/environments/environment';
;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.API_AUTH_BASE_URL

  public register(user: User): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/register',
      user
    );
  }

  public login(user: User): Observable<string> {
    return this.http.post(
      this.baseUrl + '/login', user,{ responseType: 'text'})
  }

  public getName(): Observable<string> {
    return this.http.get(this.baseUrl, {responseType: 'text' })
  }
}
