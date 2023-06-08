import { Component, OnInit } from '@angular/core';



// Home Component Will Use UserService To Get Public Resources From The Backend

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content?: string;
  // new
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(
) { }


  // ngOnInit(): void {
    // this.userService.getPublicContent().subscribe({
    //   next: (data) => {
    //     this.content = data;
    //   },
    //   error: (err) => {
    //     this.content = JSON.parse(err.error).message;
  //     }
  //   });

  //   this.isLoggedIn = !!this.tokenStorageService.getToken();

  //   if (this.isLoggedIn) {
  //     const user = this.tokenStorageService.getUser();
  //     this.roles = user.roles;

      
  //     this.username = user.username;
  //   }
  
  // }
}
