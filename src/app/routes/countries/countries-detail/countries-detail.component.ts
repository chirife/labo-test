import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../shared/models/country';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.css']
})
export class CountriesDetailComponent implements OnInit {

   @Input() country: Country;

  constructor() {

   }

  ngOnInit() {
  }

}
