import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  userForm: any;
  userDetails: any;
  formSubmitted = false;
  subject = ['Angular', 'HTML', 'CSS', 'JavaScript'];
  gender = [
    { id: 1, genderType: 'Male' },
    { id: 2, genderType: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),

      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onAddSkills() {
    this.userForm.get('skills').push(new FormControl(null));
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('error');
    }
  }
}
