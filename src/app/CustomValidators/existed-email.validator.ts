import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export  function existedEmailValidator() : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
      let emailValue : string = control.value;
      let validationError = {
        EmailAlreadyInUse: {value: emailValue}
      };
      //this.existedUserEmails.includes(emailValue)? validationError :  null;
      return null;  
    };
}