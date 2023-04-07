import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // Headers para consumo de API
  weatherApiUrl: string = 'https://open-weather13.p.rapidapi.com/city';
  XRapidAPIHostHeaderName: string = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue: string = 'open-weather13.p.rapidapi.com';
  XRapidAPIKeyHeaderName: string = 'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue: string =
    'b7c94ba408msh89439accc134153p112242jsnadf4ef9a74a4';

  // Hacemos la inyeccion de dependencias para poder usar los metodos de Http
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.weatherApiUrl + '/' + cityName, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
        .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      // params: new HttpParams().set('/', cityName),
    });
  }
}
