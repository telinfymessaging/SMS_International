import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream

//intall 'npm install crypto-js' to  use cryptojs
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
<<<<<<< Updated upstream
=======
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
>>>>>>> Stashed changes
=======
import * as CryptoJS from 'crypto-js';
import { ApiServiceService } from './Services/api-service.service';
import { ILogin, ILoginResponce } from './Interfaces/Ilogin';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule, FormsModule,HttpClientModule ],
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiServiceService]
})
export class AppComponent {
  title = 'smsInternational';
  islogedin:boolean=false;
<<<<<<< Updated upstream
  constructor(private fb: FormBuilder, private service:ApiServiceService) { }
=======
  constructor(private fb: FormBuilder, private service:apiservic) { }
>>>>>>> Stashed changes
 
  signup = this.fb.group({
    UID: ['', Validators.required],
    UNAME: ['', Validators.required],
  })
  form = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]],
    pwd: ['', [Validators.required, Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')]]

  })
  // Submit() {
  //   console.log(this.form.value);
  // }
  login() {
    // Encrypt (hash) the password
    // Hash the password
    const hashedPwd = CryptoJS.MD5(String(this.form.value.pwd)).toString();
    // You might want to create a new object if you need the username unaltered
    const formData :ILogin= {
      uname: String(this.form.value.uname),
      pwd: hashedPwd
    };
    console.log(formData);
    this.service.login(formData).subscribe((res:ILoginResponce)=>{
      console.log(res);
      });
  }
  
  login() {
    // Encrypt (hash) the password

    // Hash the password
    const hashedPwd = CryptoJS.MD5(String(this.form.value.pwd)).toString();
    // You might want to create a new object if you need the username unaltered
    const formData = {
      uname: this.form.value.uname,
      pwd: hashedPwd
    };
    console.log(formData);

    // Use formData for further processing, like sending it to your server

  }

}
