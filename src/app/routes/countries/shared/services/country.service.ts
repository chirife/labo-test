import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

const BASE: string = environment.api_countries;

@Injectable({
   providedIn: 'root'
})
export class CountryService {

   constructor(private _http: HttpClient) { }

   /**
    * Search by country name. It can be the native name or partial name
    * @param name
    */
   public getByStrictName(name: string): Observable<Country[]> {
      const url = `${BASE}/name/${name}?fullText=true`;
      return this._http.get<Country[]>(url).pipe(
         map(response => {
            return response.map( data =>
                  new Country(data.name, data.capital, data.region, data.subregion, data.flag, data.population, data.currencies)
               );
        })

      );
   }

   /**
    * Search by country full name
    * @param name
    */
   public getByName(name: string): Observable<Country[]> {
      const url = `${BASE}/name/${name}`;
      return this._http.get<Country[]>(url).pipe(
         map(response => {
            return response.map( data =>
                  new Country(data.name, data.capital, data.region, data.subregion, data.flag, data.population, data.currencies)
               );
        })
      );
   }


   /**
    * Buscar un paises en base a una region/continente.
    * @param region
    */
   public getByRegion(region: string): Observable<Country[]> {
      const url = `${BASE}/region/${region}`;
      return this._http.get<Country[]>(url).pipe(

         map(response => {
            return response.map( data =>
                  new Country(data.name, data.capital, data.region, data.subregion, data.flag, data.population, data.currencies)
               );
        })

      );
   }

}
