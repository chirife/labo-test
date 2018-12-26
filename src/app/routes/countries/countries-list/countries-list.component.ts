import { Component, OnInit, OnDestroy } from '@angular/core';
import { Country } from '../shared/models/country';
import { CountryService } from '../shared/services/country.service';
import { Subscription } from 'rxjs';
import { FilterCountry } from '../shared/models/filter-country';
import { FilterCountryEnum } from '../shared/enums/type-filter-country.enum';

/**
 * This component allows:
 *    - Search a country by name or region and display them.
 */
@Component({
   selector: 'app-countries-list',
   templateUrl: './countries-list.component.html',
   styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit, OnDestroy {

   countries: Country[];
   countrySelected: Country;
   sub: Subscription;
   hayError: boolean;

   constructor(private countryService: CountryService) { }

   ngOnInit() {
   }

   ngOnDestroy() {
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

   /**
    * Get the filter sent by user.
    * @param obj
    */
   onFilterSubmitData(filter: FilterCountry): void {

      this.countrySelected = null;

      switch (filter.type) {

         case FilterCountryEnum.byName:
            this.getCountryByStrictName(filter.text);
            break;

         case FilterCountryEnum.byRegion:
            this.getCountryByRegion(filter.text);
            break;

      }

   }


   onSelectCuntry(obj): void {
      this.countrySelected = obj;
   }

   private getCountryByStrictName(name: string): void {

      this.sub = this.countryService.getByStrictName(name).subscribe(
         (data) => { this.showData(data); },
         (error) => { this.showError(error); },
      );

   }

   private getCountryByRegion(name: string): void {

      this.sub = this.countryService.getByRegion(name).subscribe(
         (data) => { this.showData(data); },
         (error) => { this.showError(error); },
      );

   }

   private showData(data: any): void {
      this.hayError = false;
      this.countries = data;
   }

   private showError(error: any): void {
      this.hayError = true;
      this.countries = null;
      console.log(error);
   }

}
