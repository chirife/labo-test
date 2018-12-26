import { FilterCountryEnum } from '../enums/type-filter-country.enum';

export class FilterCountry {

    constructor(
        public text: string,
        public type: FilterCountryEnum
    ) {

    }

}
