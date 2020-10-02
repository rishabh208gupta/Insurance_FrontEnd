import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(
    private registerService: RegisterService // private router: Router
  ) {}

  ngOnInit(): void {
    // this.buildRegisterForm();
  }

  // buildRegisterForm(): void {
  //   this.registrationForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     dateOfBirth: ['', Validators.required],
  //     contactNumber: ['', Validators.required],
  //     address: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   });

  onSubmitClick(): void {
    // if (this.registrationForm.valid) {
    //   this.register();
    // } else {
    //   alert('Please enter all the fields');
    // }
  }

  register() {
    this.registerService.regCustomer(this.customer).subscribe((data) => {
      alert(JSON.stringify(data));
    });
  }
}
