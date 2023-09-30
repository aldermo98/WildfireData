import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wildfire } from '../data/wildfire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WildfireService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    //this.apiUrl = 'https://incidents.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=true&year=2022';
    this.apiUrl = 'http://127.0.0.1:5500/src/app/data/mockApi.json';
  }

  fetchWildfires(): Observable<any> {
    return this.http.get<Wildfire[]>(this.apiUrl);
  }
}
