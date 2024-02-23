import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Cross-Field custom validator
export function passwordMatch() : ValidatorFn{

    return (control: AbstractControl) : ValidationErrors | null => {
        let passwordControl = control.get('password');
        let confirmPasswordControl = control.get('confirmPassword');

        if(passwordControl && confirmPasswordControl){
            
        }

        return null;
    };
}