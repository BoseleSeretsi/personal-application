import { Component } from '@angular/core';
//import { TokenStorageService } from '../../_services/token-storage.service';


// Login Component Calls TokenStorageService Methods To Check The LoggedIn Status And Save Token And User Info To Session Storage.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;



/*
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
username: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
      //   this.tokenStorage.saveToken(data.accessToken);
      //   this.tokenStorage.saveUser(data);

      //   this.isLoginFailed = false;
      //   this.isLoggedIn = true;
      //   this.roles = this.tokenStorage.getUser().roles;
      //   //alert("Login Successful")
      //   this.reloadPage();
      //   this.toastr.success("Login Successful")
        
      //  window.location.replace("/surveys")
        
      },
      error: (err) => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        // this.toastr.error("Login Failed, Try Again")
      }
   });
  }

  reloadPage(): void {
    window.location.reload();
  }
  */
}

