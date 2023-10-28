import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://api.open-meteo.com/v1/forecast?latitude=48.86&longitude=2.34&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=GMT'
    );
  }
}
