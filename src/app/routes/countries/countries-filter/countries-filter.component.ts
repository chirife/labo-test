import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FilterCountry } from '../shared/models/filter-country';
import { FilterCountryEnum } from '../shared/enums/type-filter-country.enum';

@Component({
   selector: 'app-countries-filter',
   templateUrl: './countries-filter.component.html',
   styleUrls: ['./countries-filter.component.css']
})
export class CountriesFilterComponent implements OnInit, OnDestroy {

   filter: FilterCountry;
   types_filter_country: any = [
      {
         id: 1,
         value: 'Nombre'
      },
      {
         id: 2,
         value: 'Region'
      }
   ];

   @Output() eventSubmitData: EventEmitter<FilterCountry> = new EventEmitter();

   constructor() {
      // values by default.
      this.filter = new FilterCountry(null, FilterCountryEnum.byName);
   }

   ngOnInit() {
   }

   ngOnDestroy() {

   }

   private onSubmit(fc: FilterCountry): void {

      this.eventSubmitData.emit(fc);
   }

   private onOptionChange(obj): void {
      this.setType(obj.id);
   }

   setType(value: FilterCountryEnum) {
      this.filter.type = value;
   }

}
