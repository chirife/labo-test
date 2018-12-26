import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './comp/error404/error404.component';
import { SectionHeaderComponent } from './comp/section-header/section-header.component';
import { ErrorComponent } from './comp/error/error.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SectionHeaderComponent,
        ErrorComponent,
        Error404Component
    ],
    exports: [
        SectionHeaderComponent,
        ErrorComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
