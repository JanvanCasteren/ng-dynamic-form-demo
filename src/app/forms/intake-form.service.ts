import {Injectable} from '@angular/core';
import {
  DynamicDatePickerModel,
  DynamicFormControlModelConfig, DynamicInputModel, DynamicInputModelConfig,
  DynamicTimePickerModel
} from '@ng-dynamic-forms/core';

@Injectable()
export class IntakeFormService {

  constructor() {

  }

  createFormModel(formData: any) {

    const model = [];

    formData.forEach((data) => {
      // clone data first
      data = Object.assign({}, data);
      switch (data.inputType) {
        case 'textregel':
          model.push(new DynamicInputModel(data));
          break;
        case 'datum':
          console.log('this is a date');
          data.toggleIcon = './assets/calendar-icon.svg';
          model.push(new DynamicDatePickerModel(data));
          break;
        case 'tijd':
          model.push(new DynamicTimePickerModel(data));
          break;
      }
    });

    console.log(model);
    return model;
  }

}
