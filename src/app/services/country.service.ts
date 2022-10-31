import { Country } from './../models/country';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = "https://restcountries.com/v3.1/all";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpCliente: HttpClient
  ) { }

  public getCountries(): Observable<Country[]> {
    return this.httpCliente.get<Country[]>(this.url);
  }

} 
