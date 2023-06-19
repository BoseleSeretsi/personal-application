import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  isLoading: boolean;
  myForm :FormGroup;



  constructor(private authService: AuthService, public router: Router){}

password: string;
email: string;
lastname: string;
userType: string;
errorMessage: any;
firstname : string;



//myForm:FormGroup


  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.min(3)]),
      lastname: new FormControl(null, [Validators.required, Validators.min(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(8)])
    });
  }

  onSubmit() {
    this.register(this.firstname, this.lastname,this.email, this.password);
  }
  
  register(firstnameParam: string, lastnameParam: string, emailParam: string, passwordParam: string) {
    this.isLoading = true;
    this.authService.register(firstnameParam,lastnameParam, emailParam, passwordParam).subscribe((data) => {
      console.log(data,"logged data");
      
      if (data.length != 0) {
        this.router.navigate(['/login']);
        
      }
    });
  }


//   form: any = {
//     username: null,
//     email: null,
//     password: null
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';
// username: any;
// email: any;
// password: any;

//   constructor(private authService: AuthService, public _router: Router) { }

//   ngOnInit(): void {
//   }

//   onSubmit(): void {
//     const { username, email, password } = this.form;
//     //This Method That Returns An Observable Object (authService.register())
//     this.authService.register(username, email, password).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//         // this.reloadPage();
//         // this.toastr.success("Registration Was Successful")
        
//         // window.location.replace("/login")
       
         
//       },
//       error: (err) => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//         // this.toastr.error("Registration Failed, Try Again")
//       }
//     });
//   }
}