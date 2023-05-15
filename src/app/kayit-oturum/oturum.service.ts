import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OturumService {

  private authUrl = '/api/auth';

  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, { username, password, email });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, { username, password });
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/logout`, {});
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.authUrl}/isAuthenticated`);
  }
}
