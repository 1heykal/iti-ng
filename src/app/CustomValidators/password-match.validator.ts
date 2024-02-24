import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Cross-Field custom validator
export const passwordMatch: ValidatorFn =

    (formGroup: AbstractControl): ValidationErrors | null => {
        let passwordControl = formGroup.get('password');
        let confirmPasswordControl = formGroup.get('confirmPassword');

        if (!passwordControl || !confirmPasswordControl || !passwordControl.value || !confirmPasswordControl.value) {
            return null;
        }

        let valErr = {
            PasswordsDoesnotMatch: {
                'pass': passwordControl.value,
                'confirmPass': confirmPasswordControl.value
            }
        };
        return (passwordControl.value == confirmPasswordControl.value) ? null : valErr;

    };
