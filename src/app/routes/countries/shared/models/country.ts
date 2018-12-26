import { Currency } from './currency';

export class Country {

    constructor(
        public name: string,
        public capital: string,
        public region: string,
        public subregion: string,
        public flag: string,
        public population: number,
        public currencies?: Currency[]

    ) { }

}
