import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MailValidatorDirective,
      multi: true
    }
  ],
  standalone: true
})
export class MailValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      if(value && !value.endsWith('@gmail.com')){
        return { mailInvalid: true };
      }
      return null;
  }
}
