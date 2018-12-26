import { Error404Component } from '../shared/comp/error404/error404.component';

export const routes = [

    // lazy-loaded routes
    {
        path: '',
        component: null,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'countries', loadChildren: './countries/countries.module#CountriesModule' },
        ]
    },

    // Not lazy-loaded routes
    { path: '404', component: Error404Component },


    // Not found
    { path: '**', redirectTo: '/404'  }

];
