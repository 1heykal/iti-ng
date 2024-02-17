import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    email: ['', Validators.required], // or formBuilder.Control('')
    mobileNumber: [''],
    address: this.formBuilder.group({
      city: [''],
      postalCode: [''],
      street: ['']
    }),
    password: [''],
    confirmPassword: ['']

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