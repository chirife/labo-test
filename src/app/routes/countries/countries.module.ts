import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesDetailComponent } from './countries-detail/countries-detail.component';
import { CountriesFilterComponent } from './countries-filter/countries-filter.component';

// Definimos las rutas del modulo //
const routes: Routes = [
  { path: 'list', component: CountriesListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CountriesListComponent,
    CountriesDetailComponent,
    CountriesFilterComponent
  ]
})
export class CountriesModule { }
