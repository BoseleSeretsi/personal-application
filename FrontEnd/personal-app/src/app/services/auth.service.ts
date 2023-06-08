import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://localhost:4000/';  

    constructor(private http: HttpClient) {} 

     isUserLoggedIn: boolean = false; 

     login(emailP: string, passwordP: string): Observable<any> {
           const cred = {email: emailP, password: passwordP};     
             
               return this.http.post(`${this.URL}/users/login`, cred); 
        }   

        register(firstnameParam: string, lastnameParam: string, emailParam: string, passwordParam: string): Observable<any> {

         
      
          const userObj = {
            firstname: firstnameParam,
            lastname: lastnameParam,
            userType:"client",
            email: emailParam,
            password: passwordParam,
          };
      
          console.log(userObj, 'entered credentials');
      
          return this.http.post(`${this.URL}users/register`, userObj);
        }

  
}
