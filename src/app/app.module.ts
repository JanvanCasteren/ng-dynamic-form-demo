import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntakeFormComponent } from './forms/intake-form/intake-form.component';

import {DynamicFormsCoreModule, DynamicFormService, DynamicFormValidationService} from '@ng-dynamic-forms/core';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IntakeFormService} from './forms/intake-form.service';
import { IntakeFormBootstrapComponent } from './forms/intake-form-bootstrap/intake-form-bootstrap.component';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IntakeFormComponent,
    IntakeFormBootstrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    DynamicFormsBasicUIModule,
    NgbModule.forRoot(), //zo moet het in toplevel module, in gewone module zonder forRoot()
    DynamicFormsNGBootstrapUIModule
  ],
  providers: [
    IntakeFormService,
    DynamicFormService,
    DynamicFormValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
