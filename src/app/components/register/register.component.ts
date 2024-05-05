import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: any = {}; // Object to hold form data

  onSubmit() {
    // Handle form submission
    console.log('Form Data:', this.formData);
    // Here you can perform actions like sending the form data to a server
  }
}
