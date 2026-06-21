import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  baseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  getTrips(): Observable<Trip[]> {
    const token = this.storage.getItem('travlr-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Trip[]>(`${this.baseUrl}/trips`, { headers });
  }

  getTrip(tripCode: string): Observable<Trip> {
    const token = this.storage.getItem('travlr-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Trip>(`${this.baseUrl}/trips/${tripCode}`, { headers });
  }

  addTrip(formData: Trip): Observable<Trip> {
    const token = this.storage.getItem('travlr-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Trip>(`${this.baseUrl}/trips`, formData, { headers });
  }

  updateTrip(tripCode: string, formData: Trip): Observable<Trip> {
    const token = this.storage.getItem('travlr-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Trip>(`${this.baseUrl}/trips/${tripCode}`, formData, { headers });
  }

  login(user: User, passwd: string): Observable<any> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  register(user: User, passwd: string): Observable<any> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  private handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<any> {
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }
}