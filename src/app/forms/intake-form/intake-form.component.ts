import { Component, OnInit } from '@angular/core';
import formData from '../evenement-form.data';
import {IntakeFormService} from '../intake-form.service';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.css']
})
export class IntakeFormComponent implements OnInit {

  formModel: DynamicFormControlModel[];

  formGroup: FormGroup;

  constructor(
    private formService: DynamicFormService,
    private intakeFormService: IntakeFormService
  ) {
    this.formModel = this.intakeFormService.createFormModel(formData);
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  ngOnInit() {
  }

  onBlur($event) {
    console.log(`BLUR event on ${$event.model.id}: `, $event);
  }

  onChange($event) {
    console.log(`CHANGE event on ${$event.model.id}: `, $event);
  }

  onFocus($event) {
    console.log(`FOCUS event on ${$event.model.id}: `, $event);
  }

}
