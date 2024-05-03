import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Import NgForm
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register-comp',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './register-comp.component.html',
  styleUrl: './register-comp.component.css'
})
export class RegisterCompComponent {
   submittedSuccessfully: boolean = false;
   notsubmitted:boolean=false; 
  submit(loginForm:NgForm) {
    this.notsubmitted=false;
    if(loginForm.form.value.email!="" && loginForm.form.value.firstname!="" && loginForm.form.value.lastname!="" && loginForm.form.value.password!=""){
    console.log("Form Submitted",loginForm);
    this.submittedSuccessfully=true;
    this.notsubmitted=false;
  }else{
    console.log("Form Not Submitted",loginForm);
    this.notsubmitted=true;
  }
   
    // You can perform form submission or other actions here
    // 
  }
}
