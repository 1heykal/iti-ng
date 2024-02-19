import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm: FormGroup = this.formBuilder.group({

    fullName: ['', [
      Validators.required,
      Validators.pattern('[A-Za-z]{3,}')
    ]],

    email: ['', [Validators.required, this.existedEmailValidator()]], // or formBuilder.Control('')
    mobileNumber: this.formBuilder.array(['']),
    address: this.formBuilder.group({
      city: [''],
      postalCode: [''],
      street: ['']
    }),
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    referal: [''],
    referalOther: ['']
  });


  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    // check path params, to specify user reg, or edit profile
    this.userRegisterForm.patchValue({ // setValue    // patch - not alll properities // set must provide all prop
      fullName: 'ITI',
      email: 'info@iti.gov.eg',
      mobileNumber: '14631865588',
      address: {
        city: 'dk',
        postalCode: '111',
        street: 'dk st'
      }
    });
  }

  get fullName(){
    return this.userRegisterForm.get('fullName');
  }

  fillForm(){
    // In case of Edit profile
    //this.userRegisterForm.get('fullName')?.setValue('Test');

    // call api to get user profile
   
  }

  submit(){
    let userModel: IUser = this.userRegisterForm.value;
    console.log(userModel);
  }

  get phoneNumbers(){
    return this.userRegisterForm.get('mobileNumber') as FormArray;
  }

  get email(){
    return this.userRegisterForm.get('email');
  }

  addPhoneNo(){
    this.phoneNumbers.push(this.formBuilder.control(''));
  }

  get referal(){
    return this.userRegisterForm.get('referal');
  }

  updateReferalValidators(){
    if(this.referal?.value == 'other')
    this.userRegisterForm.get('referalOther')?.addValidators(Validators.required);
  else{
    this.userRegisterForm.get('referalOther')?.clearValidators();
  }
  this.userRegisterForm.get('referalOther')?.updateValueAndValidity();
  }


  existedEmailValidator() : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
      let emailValue : string = control.value;
      let validationError = {
        'EmailNotValid': {value: emailValue}
      };
      return emailValue.includes('@') || (emailValue.length == 0 && control.untouched)? null : validationError;
    };
  }


}


// userRegisterForm = new FormGroup({
//   fullName: new FormControl('', [
//     Validators.required,
//      Validators.pattern('[A-Za-z]{3,}')
//   ]),
//   email: new FormControl(''),
//   mobileNumber: new FormControl(''),
//   address: new FormGroup({
//     'city': new FormControl(''),
//     'postalCode': new FormControl(''),
//     'street': new FormControl('')
//   }),
//   password: new FormControl(''),
//   confirmPassword: new FormControl('')
// });